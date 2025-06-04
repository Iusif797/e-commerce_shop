import React, { useState, useRef, ChangeEvent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useUser } from '../contexts/UserContext';

const Profile = () => {
  const { userData, updateUserData, updateAvatar, isLoggedIn, setIsLoggedIn, clearUserData } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    address: userData.address,
  });
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Обработка изменения полей формы
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Обработка отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserData(formData);
    setIsEditing(false);
    
    if (!isLoggedIn) {
      setIsLoggedIn(true);
    }
  };

  // Обработка выхода из профиля
  const handleLogout = () => {
    clearUserData();
  };

  // Открываем диалог выбора файла
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  // Обработка выбора файла аватара
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Преобразуем файл в Data URL для предпросмотра
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setAvatarPreview(reader.result);
        updateAvatar(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Head>
        <title>Profile | LUXE - Premium Fashion</title>
        <meta name="description" content="Manage your profile and account settings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12 text-center">
            {isLoggedIn ? 'Your Profile' : 'Create Your Profile'}
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-8">
              {/* Avatar Section */}
              <div className="relative">
                <div 
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-md cursor-pointer relative group"
                  onClick={handleAvatarClick}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all z-10 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                      Change Photo
                    </span>
                  </div>
                  <div className="relative w-full h-full">
                    <Image 
                      src={avatarPreview || userData.avatarUrl || '/images/default-avatar.png'}
                      alt="Profile Avatar"
                      fill
                      sizes="(max-width: 640px) 96px, 128px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              {/* User Info */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-medium mb-2">
                  {userData.name || 'Welcome'}
                </h2>
                {userData.email && (
                  <p className="text-gray-600 mb-1">{userData.email}</p>
                )}
                {userData.phone && (
                  <p className="text-gray-600 mb-1">{userData.phone}</p>
                )}
                {userData.address && (
                  <p className="text-gray-600 mb-4">{userData.address}</p>
                )}
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-luxe-dark text-white px-4 py-2 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all rounded-md"
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </button>
                  {isLoggedIn && (
                    <button 
                      onClick={handleLogout}
                      className="border border-luxe-dark text-luxe-dark px-4 py-2 text-sm uppercase tracking-wider hover:bg-gray-50 transition-all rounded-md"
                    >
                      Log Out
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Edit Form */}
            {isEditing && (
              <form onSubmit={handleSubmit} className="border-t border-gray-200 pt-6 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-luxe-dark focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-luxe-dark focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-luxe-dark focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Shipping Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-luxe-dark focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-luxe-dark text-white px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all rounded-md"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Order History Section (Placeholder) */}
          {isLoggedIn && (
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-medium mb-4">Order History</h2>
              <div className="text-center text-gray-500 py-8">
                <p>You haven't placed any orders yet.</p>
                <button className="mt-4 bg-white border border-luxe-dark text-luxe-dark px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-gray-50 transition-all rounded-md">
                  Start Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile; 