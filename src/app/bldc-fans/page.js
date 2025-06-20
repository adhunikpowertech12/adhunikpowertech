"use client"
import { useState } from 'react';
import Image from 'next/image';
import {
    ShoppingCart, Phone, Check, Star, Download, MessageSquare,
    ChevronRight, Zap, Lightbulb, Smartphone, Clock, Shield,
    AirVent, Gauge, Wifi, Bluetooth, Settings, FileText,
    HelpCircle, ArrowRight, RotateCw, BatteryFull, Volume2,
    MessageSquareQuote
} from 'lucide-react';
import { ChevronLeft } from 'lucide-react';


const FanProductPage = () => {
    const [selectedFan, setSelectedFan] = useState(0);
    const [activeTab, setActiveTab] = useState('features');

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const fanTypes = [
        {
            id: 1,
            name: 'Ecruz Vaiyu Star',
            tagline: 'Luxury BLDC Ceiling Fan with Smart Lighting',
            price: 2942,
            regularPrice: 3749,
            image: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750403325/91f360_c42d1b5523ba4a0cbd0a6981327cadcc_mv2_gwplkj.avif',
            thumbnail: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750403325/91f360_c42d1b5523ba4a0cbd0a6981327cadcc_mv2_gwplkj.avif',
            gallery: [
                'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750403325/91f360_e8ab824484cf46b49d491650267277c9_mv2_oqown6.avif',
                'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750403325/91f360_ce380a33380d4973a5fd3f545429ee94_mv2_f6uxuf.avif',
                'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750403326/91f360_dff11e4e49b545cc9be75a8c69df5ad9_mv2_zmtmam.avif'
            ],
            highlights: [
                { icon: <Zap className="w-6 h-6" />, title: 'Energy Saving', value: 'Bldc Motor Fan (28 W)' },
                { icon: <Lightbulb className="w-6 h-6" />, title: 'LED Lights', value: '7 Smart LEDs' },
                { icon: <Smartphone className="w-6 h-6" />, title: 'Control', value: 'RF Remote' },
                { icon: <Shield className="w-6 h-6" />, title: 'Warranty', value: '3 Years' }
            ],
            features: [
                'Premium wooden finish blades with aircraft-grade aluminum core',
                'BLDC motor with 50% energy savings compared to conventional fans',
                'Smart RF remote with 15ft range and speed-based LED indicators',
                'Double ball bearing system for whisper-quiet operation (under 35dB)',
                'Voltage fluctuation protection (130V-290V)',
                'Inverter compatible with 3x longer backup time'
            ],
            specifications: [
                { name: 'Model', value: 'Vaiyu Star' },
                { name: 'Finish', value: 'Wooden' },
                { name: 'Power Consumption', value: '28W' },
                { name: 'Air Delivery', value: '220 CMM' },
                { name: 'RPM', value: '350' },
                { name: 'Warranty', value: '2+1 Years' },
                { name: 'Blade Material', value: 'Aircraft-grade Aluminum' },
                { name: 'Remote Type', value: 'RF (15ft range)' }
            ],
            techSpecs: [
                {
                    category: 'Electrical', items: [
                        { name: 'Voltage', value: '130V-290V' },
                        { name: 'Power', value: '28W' },
                        { name: 'Motor Type', value: 'BLDC' }
                    ]
                },

                {
                    category: 'Performance', items: [
                        { name: 'Airflow', value: '220 CMM' },
                        { name: 'Noise Level', value: '<35dB' },
                        { name: 'Speed Settings', value: '6' }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: 'Ecruz Vaiyu Chill Pro',
            tagline: 'Smart BLDC Fan with Air Purification',
            price: 3249,
            regularPrice: 3999,
        image: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750403325/91f360_c42d1b5523ba4a0cbd0a6981327cadcc_mv2_gwplkj.avif',
            thumbnail: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750403325/91f360_c42d1b5523ba4a0cbd0a6981327cadcc_mv2_gwplkj.avif',
                   gallery: [
                'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750403325/91f360_e8ab824484cf46b49d491650267277c9_mv2_oqown6.avif',
                'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750403325/91f360_ce380a33380d4973a5fd3f545429ee94_mv2_f6uxuf.avif',
                'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750403326/91f360_dff11e4e49b545cc9be75a8c69df5ad9_mv2_zmtmam.avif'
          
            ],
            highlights: [
                { icon: <AirVent className="w-6 h-6" />, title: 'Airflow', value: '240 CMM' },
                { icon: <Smartphone className="w-6 h-6" />, title: 'Control', value: 'App + Remote' },
                { icon: <RotateCw className="w-6 h-6" />, title: 'Purifier', value: 'Built-in' },
                { icon: <Volume2 className="w-6 h-6" />, title: 'Noise', value: '<30dB' }
            ],
            features: [
                'Brushed steel finish with premium metallic coating',
                'Smart app control with scheduling and automation',
                'Built-in HEPA air purifier with PM2.5 filtration',
                'Triple ball bearing system for ultra-smooth operation',
                'IoT enabled for smart home integration',
                'Sleep mode with gradual speed reduction'
            ],
            specifications: [
                { name: 'Model', value: 'Power Pro' },
                { name: 'Finish', value: 'Brushed Steel' },
                { name: 'Power Consumption', value: '35W' },
                { name: 'Air Delivery', value: '240 CMM' },
                { name: 'RPM', value: '400' },
                { name: 'Warranty', value: '3 Years' },
                { name: 'Blade Material', value: 'Carbon Fiber Composite' },
                { name: 'Control', value: 'App + RF Remote' }
            ],
            techSpecs: [
                {
                    category: 'Electrical', items: [
                        { name: 'Voltage', value: '110V-300V' },
                        { name: 'Power', value: '35W' },
                        { name: 'Connectivity', value: 'Wi-Fi + Bluetooth' }
                    ]
                },
                {
                    category: 'Physical', items: [
                        { name: 'Blade Span', value: '52"' },
                        { name: 'Weight', value: '6.1kg' },
                        { name: 'Purifier', value: 'HEPA Filter' }
                    ]
                },
                {
                    category: 'Performance', items: [
                        { name: 'Airflow', value: '240 CMM' },
                        { name: 'Noise Level', value: '<30dB' },
                        { name: 'Speed Settings', value: '8' }
                    ]
                }
            ]
        }
    ];

    const currentFan = fanTypes[selectedFan];


    const galleryImages = [currentFan.image, ...currentFan.gallery];

    // Image navigation functions
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
    };

    // Reset image index when fan changes
    const handleFanChange = (index) => {
        setSelectedFan(index);
        setCurrentImageIndex(0);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 md:px-14 py-12 mt-24">
                {/* Product Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Gallery */}
                    <div className="space-y-6">
                        {/* Main Image with Navigation */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative group">
                            <div className="relative h-[100%] w-full">
                                <img
                                    src={galleryImages[currentImageIndex]}
                                    alt={`${currentFan.name} - View ${currentImageIndex + 1}`}

                                    className="transition-opacity duration-300 object-center object-fill"

                                />
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-3 gap-4">
                            {galleryImages.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`relative bg-white rounded-xl overflow-hidden cursor-pointer transition-all border-2 ${currentImageIndex === index ? 'border-cyan-500 shadow-lg' : 'border-transparent hover:border-gray-200'}`}
                                >
                                    <div className="relative h-28">
                                        <img
                                            src={img}
                                            alt={`${currentFan.name} thumbnail ${index + 1}`}
                                            className=' object-center object-contain'
                                        />
                                    </div>
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${currentImageIndex === index ? 'bg-cyan-500' : 'bg-transparent'}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        {/* Fan Selector */}
                        <div className="flex space-x-4">
                            {fanTypes.map((fan, index) => (

                                <button
                                    key={fan.id}
                                    onClick={() => handleFanChange(index)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all ${selectedFan === index
                                        ? 'bg-cyan-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
                                >
                                    {fan.name}
                                </button>

                            ))}
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{currentFan.name}</h1>
                            <p className="text-xl text-cyan-600 mt-2">{currentFan.tagline}</p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {currentFan.highlights.map((item, index) => (
                                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-cyan-600 mb-2">{item.icon}</div>
                                    <h3 className="font-medium text-sm text-gray-500 pb-1">{item.title}</h3>
                                    <p className="text-md font-semibold text-gray-800">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Price */}
                        <div className="bg-gradient-to-r from-cyan-50 to-white p-6 rounded-2xl border border-cyan-100">
                            <div className="flex items-end">
                                <span className="text-4xl font-bold text-cyan-700">₹{currentFan.price.toLocaleString()}</span>
                                <span className="ml-3 text-xl text-gray-500 line-through">₹{currentFan.regularPrice.toLocaleString()}</span>
                                <span className="ml-3 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Save ₹{(currentFan.regularPrice - currentFan.price).toLocaleString()}
                                </span>
                            </div>
                            <div className="mt-2 text-green-600 font-medium flex items-center">
                                <Check className="w-5 h-5 mr-1" />
                                Free Shipping & Installation
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                                <MessageSquareQuote className='mr-2' />
                                Request Quote
                            </button>
                            <button className="flex-1 bg-gray-900 hover:bg-black text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                                <Phone className="w-6 h-6 mr-2" />
                                Call Us Now
                            </button>
                        </div>

                        
                    </div>
                </div>

                {/* Product Details Tabs */}
                <div className="mb-20">
                    <div className="border-b border-gray-200">
                        <nav className="flex  flex-col md:flex-row md:space-x-8">
                            <button
                                onClick={() => setActiveTab('features')}
                                className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'features' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Features
                            </button>
                            <button
                                onClick={() => setActiveTab('specs')}
                                className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'specs' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Specifications
                            </button>
                            <button
                                onClick={() => setActiveTab('tech')}
                                className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'tech' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Technical Details
                            </button>
                            <button
                                onClick={() => setActiveTab('support')}
                                className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'support' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Support
                            </button>
                        </nav>
                    </div>

                    <div className="mt-8">
                        {activeTab === 'features' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Features</h3>
                                    <ul className="space-y-4">
                                        {currentFan.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-cyan-600 mr-3 mt-0.5">
                                                    <Check className="w-5 h-5" />
                                                </div>
                                                <p className="text-gray-700">{feature}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'specs' && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {currentFan.specifications.map((spec, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                                                    {spec.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {spec.value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {activeTab === 'tech' && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {currentFan.techSpecs.map((section, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                        <h4 className="font-bold text-lg text-gray-900 mb-4">{section.category}</h4>
                                        <ul className="space-y-3">
                                            {section.items.map((item, i) => (
                                                <li key={i} className="flex justify-between">
                                                    <span className="text-gray-600">{item.name}</span>
                                                    <span className="text-gray-900 font-medium">{item.value}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'support' && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">Product Support</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-3">Warranty Information</h4>
                                        <p className="text-gray-600 mb-4">
                                            Our products come with a comprehensive {currentFan.id === 1 ? '2+1 year' : '3 year'} warranty covering all manufacturing defects.
                                        </p>
                                        <button className="text-cyan-600 font-medium hover:text-cyan-700 flex items-center">
                                            <FileText className="w-4 h-4 mr-2" />
                                            Download Warranty PDF
                                        </button>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-3">Installation & Support</h4>
                                        <p className="text-gray-600 mb-4">
                                            Free professional installation available. Our support team is available 7 days a week.
                                        </p>
                                        <button className="bg-cyan-600 text-white px-5 py-2 rounded-lg hover:bg-cyan-700 transition flex items-center">
                                            <MessageSquare className="w-4 h-4 mr-2" />
                                            Contact Support
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Comparison Banner */}
                <div className="bg-gradient-to-r from-cyan-800 to-cyan-600 rounded-2xl shadow-xl overflow-hidden mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10 text-white">
                            <h3 className="text-2xl font-bold mb-4">Still Deciding?</h3>
                            <p className="text-cyan-100 mb-6">
                                Compare our BLDC fans with conventional ceiling fans to see the savings.
                            </p>
                            <button className="bg-white text-cyan-700 px-6 py-3 rounded-lg font-medium hover:bg-cyan-50 transition flex items-center">
                                Compare Products
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                        <div className="bg-white p-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-medium">Energy Savings</span>
                                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                                    Up to 60%
                                </span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-medium">Annual Cost</span>
                                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                                    ₹6500 saved
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-medium">Noise Level</span>
                                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                                    50% quieter
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trusted by Thousands of Homes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "The energy savings are incredible! My electricity bill reduced by 40% after replacing all fans with Adhunik BLDC models."
                                </p>
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Rahul Sharma</h4>
                                        <p className="text-sm text-gray-500">Mumbai • 3 months ago</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



            </main>
        </div>
    );
};

export default FanProductPage;










