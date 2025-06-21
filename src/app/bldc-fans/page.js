"use client"
import { useState } from 'react';
import Image from 'next/image';
import {
    ShoppingCart, Phone, Check, Star, Download, MessageSquare,
    ChevronRight, Zap, Lightbulb, Smartphone, Clock, Shield,
    AirVent, Gauge, Wifi, Bluetooth, Settings, FileText,
    HelpCircle, ArrowRight, RotateCw, BatteryFull, Volume2,
    MessageSquareQuote,
    Mail,
    MapPin
} from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import {
    Leaf,
    ChevronDown, Calculator, BadgeCheck,
    Heart,
} from 'lucide-react';


import { 
   Moon, Power,  
} from 'lucide-react';

const FanProductPage = () => {
    const [selectedFan, setSelectedFan] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedVariant, setSelectedVariant] = useState(0);


    const fanTypes = [
{
            id: 1,
            name: 'Venessa Blink',
            tagline: 'BLDC Ceiling Fan with 9W LED Light',
            variants: [
                {
                    color: 'Smoke Brown',
                    price: 2999,
                    regularPrice: 5499,
                    image: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf4_acuaqz.webp',
                    thumbnail: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf4_acuaqz.webp',
                    gallery: [
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf5_hauz4y.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf1_b8n4yq.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf3_qiao2f.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf2_qcdojy.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481342/cf_tmj6q0.webp',
                    ]
                }
            ],
            highlights: [
                { icon: <Zap className="w-6 h-6" />, title: 'Energy Saving', value: '50% Less Power' },
                { icon: <Lightbulb className="w-6 h-6" />, title: 'LED Light', value: '9W Dimmable' },
                { icon: <Smartphone className="w-6 h-6" />, title: 'Control', value: 'RF Remote' },
                { icon: <Shield className="w-6 h-6" />, title: 'Warranty', value: '2 Years' }
            ],
            features: [
                'BLDC technology saves up to ₹6500 annually on electricity bills',
                'Smart RF Remote with 15 feet range (boost mode, timer, sleep mode)',
                '350 RPM motor speed with 220 CMM air delivery',
                'Double ball bearing for smooth operation and durability',
                'Consistent speed during voltage fluctuations (130V-290V)',
                '9W LED light with 5-step dimmable feature',
                'Runs 3x longer on inverter battery compared to ordinary fans',
                'Instant drive with no startup delay',
                'Made in India with quality craftsmanship'
            ],
            specifications: [
                { name: 'Model', value: 'Venessa Blink' },
                { name: 'Power Source Type', value: 'Corded Electric' },
                { name: 'Finish', value: 'Smoke Brown' },
                { name: 'Controller Type', value: 'Remote Control' },
                { name: 'Mounting Type', value: 'Ceiling Mount' },
                { name: 'Recommended Uses For Product', value: 'Cooling' },
                { name: 'Special Features', value: '9 Watt LED light, 4-Step Dimmable Light, 3-blade Design, RF Remote Control' },
                { name: 'Room Type', value: 'Living Room, Bedroom, Dining Room' },
                { name: 'Power Consumption', value: '28W (fan) + 9W (light)' },
                { name: 'Air Delivery', value: '220 CMM' },
                { name: 'Speed', value: '350 RPM' },
                { name: 'Number Of Speeds', value: '6' },
                { name: 'Warranty', value: '2 Years' },
                { name: 'Wattage', value: '32 Watts' },
                { name: 'Blade Material', value: 'Premium CNC Winding' },
                { name: 'Remote Type', value: 'RF (15ft range)' },
                { name: 'Number of Blades', value: '3' },
                { name: 'Air Flow Capacity', value: '220 Cubic Feet Per Minute' },
                { name: 'Voltage', value: '220 Volts' }
            ],
            techSpecs: [
                {
                    category: 'Brand Name : Adhunik Air Care',
                    items: [
                        { name: 'Included Components', value: 'Ceiling Fan, RF Remote, Canopy, Downrod, Shackel' },
                        { name: 'Model Number', value: 'Venessa Blink' },
                        { name: 'Manufacturer', value: 'Adhunik PowerTech Private Limited' },
                        { name: 'Item Type Name', value: 'Ceiling Fan' },
                        { name: 'Packer Contact Information', value: 'DCG1-0102, Tower -1, DLF Corporate Green Sector-74A Gurugram (HR) 122004' },
                    ]
                }
            ]
        },
        {
            id: 2,
            name: 'Venessa Lumo',
            tagline: 'Luxury BLDC Ceiling Fan with Smart Lighting',
            variants: [
                {
                    color: 'Smoke Brown',
                    price: 3299,
                    regularPrice: 5999,
                    image: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf4_acuaqz.webp',
                    thumbnail: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf4_acuaqz.webp',
                    gallery: [
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf5_hauz4y.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf1_b8n4yq.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf3_qiao2f.webp'
                        ,
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf2_qcdojy.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481342/cf_tmj6q0.webp',
                    ]
                }
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
                { name: 'Model', value: 'Venessa Lumo' },
                { name: 'Power Source Type', value: 'Corded Electric' },
                { name: 'Finish', value: 'Smoke Brown' },
                { name: 'Mounting Type', value: 'Ceiling Mount' },
                { name: 'Controller Type', value: 'Remote Control' },
                { name: 'Recommended Uses For Product', value: 'Cooling' },
                { name: 'Special Features', value: '9 Watt LED light, 4-Step Dimmable Light, 3-blade Design, RF Remote Control' },
                { name: 'Room Type', value: 'Living Room, Bedroom, Dining Room' },
                { name: 'Power Consumption', value: '28W' },
                { name: 'Wattage', value: '32 Watts' },
                { name: 'Air Flow Capacity', value: '220 Cubic Feet Per Minute' },
                { name: 'Speed', value: '350 RPM' },
                { name: 'Number of Blades', value: '3' },
                { name: 'Voltage', value: '220 Volts' },
                { name: 'Warranty', value: '2 Years' },
                { name: 'Blade Material', value: 'Aircraft-grade Aluminum' },
                { name: 'Remote Type', value: 'RF (15ft range)' }
            ],
            techSpecs: [
                {
                    category: 'Brand Name : Adhunik Air Care',
                    items: [
                        { name: 'Included Components', value: 'Ceiling Fan, RF Remote, Canopy, Downrod, Shackel' },
                        { name: 'Model Number', value: 'Venessa Lumo' },
                        { name: 'Manufacturer', value: 'Adhunik PowerTech Private Limited' },
                        { name: 'Item Type Name', value: 'Ceiling Fan' },
                        { name: 'Packer Contact Information', value: 'DCG1-0102, Tower -1, DLF Corporate Green Sector-74A Gurugram (HR) 122004' },
                    ]
                }
            ]
        },
        {
            id: 3,
            name: 'SimpleX',
            tagline: 'BLDC Ceiling Fan',
            variants: [
                {
                    color: 'White',
                    price: 2499,
                    regularPrice: 3999,
                    image: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf4_acuaqz.webp',
                    thumbnail: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf4_acuaqz.webp',
                    gallery: [
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf5_hauz4y.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf1_b8n4yq.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf3_qiao2f.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf2_qcdojy.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481342/cf_tmj6q0.webp',
                    ]
                },
                {
                    color: 'Cherry Brown',
                    price: 2499,
                    regularPrice: 3999,
                    image: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf4_acuaqz.webp',
                    thumbnail: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf4_acuaqz.webp',
                    gallery: [
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf5_hauz4y.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf1_b8n4yq.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf3_qiao2f.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf2_qcdojy.webp',
                        'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481342/cf_tmj6q0.webp',
                    ]
                }
            ],
            highlights: [
                { icon: <Zap className="w-6 h-6" />, title: 'Power Consumption', value: '32W Max' },
                { icon: <Volume2 className="w-6 h-6" />, title: 'Noise Level', value: 'Low Noise' },
                { icon: <RotateCw className="w-6 h-6" />, title: 'Reverse Rotation', value: 'Yes' },
                { icon: <Shield className="w-6 h-6" />, title: 'Warranty', value: '3 Years' }
            ],
            features: [
                'Reverse Rotation for all-season comfort',
                'Timer function (2H/4H/8H)',
                'Sleep Mode for gradual speed reduction',
                'Boost Speed with RF Remote control',
                'Energy Efficient BLDC Motor',
                'Runs 3 Times Longer on inverter'
            ],
            specifications: [
                { name: 'Motor Speed', value: '380 RPM' },
                { name: 'Power Consumption', value: '32W Max' },
                { name: 'Fan Sweep Size', value: '1200 mm' },
                { name: 'Air Delivery', value: '220 CMM' },
                { name: 'Speed Settings', value: '6 speed' },
                { name: 'THD', value: '<10%' },
                { name: 'Warranty', value: '3 Years' },
                { name: 'Origin', value: 'Made in India' }
            ],
            techSpecs: [
                {
                    category: 'Performance',
                    items: [
                        { name: 'Speed 1', value: '115 RPM | 3W' },
                        { name: 'Speed 2', value: '185 RPM | 5W' },
                        { name: 'Speed 3', value: '218 RPM | 12W' },
                        { name: 'Speed 4', value: '284 RPM | 18W' },
                        { name: 'Speed 5', value: '346 RPM | 25W' },
                        { name: 'Speed 6', value: '380 RPM | 28W' }
                    ]
                },
                {
                    category: 'Features',
                    items: [
                        { name: 'Remote Control', value: 'RF Remote' },
                        { name: 'Special Modes', value: 'Sleep, Boost' },
                        { name: 'Timer', value: '2H/4H/8H' },
                        { name: 'Energy Saving', value: 'BLDC Technology' }
                    ]
                },
                {
                    category: 'Dimensions',
                    items: [
                        { name: 'Blade Span', value: '48 inches' },
                        { name: 'Weight', value: '5.5 kg' },
                        { name: 'Mounting', value: 'Ceiling' }
                    ]
                }
            ],
            productDetails: {
                brand: 'SimpleX',
                modelNumber: 'BLDC-1200',
                manufacturer: 'SimpleX Appliances India',
                packerInfo: 'SimpleX Appliances, Sector 62, Noida, Uttar Pradesh',
                contact: '+911234567890, support@simplex.com',
                itemType: 'Ceiling Fan',
                recommendedRooms: ['Living Room', 'Bedroom', 'Dining Room'],
                specialFeatures: [
                    'Energy Efficient BLDC Motor',
                    'RF Remote Control',
                    '3 Year Warranty',
                    'Low Noise Operation'
                ]
            }
        }
    ];

    const currentFan = fanTypes[selectedFan];
    const currentVariant = currentFan.variants[selectedVariant];
    const galleryImages = [currentVariant.image, ...currentVariant.gallery];
    const showColorSelector = currentFan.variants.length > 1;

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

    const handleFanChange = (index) => {
        setSelectedFan(index);
        setSelectedVariant(0);
        setCurrentImageIndex(0);
    };





    const [activeTab, setActiveTab] = useState('features');
    const [expandedFeature, setExpandedFeature] = useState(null);

    const features = [
        {
            icon: <Zap className="w-8 h-8 text-cyan-600" />,
            title: "Energy Efficient",
            description: "Consumes only 32W at top speed (65% less than conventional fans)",
            details: "At Speed 1, consumes just 3W for ultra-low energy use"
        },
        {
            icon: <Leaf className="w-8 h-8 text-green-500" />,
            title: "Eco-Friendly",
            description: "Reduces carbon footprint with BLDC technology",
            details: "Saves up to ₹6500 annually on electricity bills"
        },
        {
            icon: <Clock className="w-8 h-8 text-amber-500" />,
            title: "Inverter Compatible",
            description: "Runs 3X longer during power cuts",
            details: "Ensures continuous comfort during outages"
        },
        {
            icon: <Volume2 className="w-8 h-8 text-blue-500" />,
            title: "Whisper Quiet",
            description: "<35dB operation for peaceful environments",
            details: "Ideal for bedrooms and quiet spaces"
        },
        {
            icon: <Smartphone className="w-8 h-8 text-purple-500" />,
            title: "Smart RF Remote",
            description: "Control from anywhere in the room",
            details: "Includes timer and sleep mode functions"
        },
        {
            icon: <Shield className="w-8 h-8 text-emerald-500" />,
            title: "2-Year Warranty",
            description: "100% copper winding for durability",
            details: "Proudly made in India"
        }
    ];

   

    const powerConsumptionData = [
        { speed: "Speed 1", rpm: 115, watts: 3 },
        { speed: "Speed 2", rpm: 185, watts: 5 },
        { speed: "Speed 3", rpm: 218, watts: 12 },
        { speed: "Speed 4", rpm: 284, watts: 18 },
        { speed: "Speed 5", rpm: 346, watts: 25 },
        { speed: "Speed 6", rpm: 380, watts: 28 }
    ];



     const [expandedProduct, setExpandedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'SimpleX BLDC Ceiling Fan',
      tagline: 'Smart Savings & Effortless Comfort',
      colors: ['White', 'Cherry Brown'],
      features: [
        { icon: <RotateCw className="w-5 h-5" />, text: 'Reverse Rotation' },
        { icon: <Clock className="w-5 h-5" />, text: 'Timer (2H/4H/8H)' },
        { icon: <Moon className="w-5 h-5" />, text: 'Sleep Mode' },
        { icon: <Zap className="w-5 h-5" />, text: 'Boost Speed' },
        { icon: <Smartphone className="w-5 h-5" />, text: 'RF Remote' }
      ],
      specs: {
        motorSpeed: '380 RPM',
        power: '32W Max',
        sweepSize: '1200 mm',
        airDelivery: '220 CMM',
        speeds: '6 speed',
        thd: '<10%'
      },
      pricing: {
        mrp: 3999,
        selling: 2499
      },
      image: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf4_acuaqz.webp'
    },
    {
      id: 2,
      name: 'Venessa Lumo BLDC Ceiling Fan',
      tagline: 'Illuminate Your Savings with Smart Style',
      colors: ['Smoke Brown'],
      features: [
        { icon: <RotateCw className="w-5 h-5" />, text: 'Reverse Rotation' },
        { icon: <Clock className="w-5 h-5" />, text: 'Timer (2H/4H/8H)' },
        { icon: <Zap className="w-5 h-5" />, text: 'Boost Speed' },
        { icon: <Lightbulb className="w-5 h-5" />, text: '9W LED Light' },
        { icon: <Power className="w-5 h-5" />, text: 'Dedicated On/Off' },
        { icon: <Moon className="w-5 h-5" />, text: 'Sleep Mode' },
        { icon: <Smartphone className="w-5 h-5" />, text: 'RF Remote' },
        { icon: <Star className="w-5 h-5" />, text: '5-Step Dimmable LED' }
      ],
      specs: {
        motorSpeed: '380 RPM',
        power: '32W Max',
        sweepSize: '1200 mm',
        airDelivery: '220 CMM',
        speeds: '6 speed',
        thd: '<10%'
      },
      pricing: {
        mrp: 5999,
        selling: 3299
      },
      image: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf4_acuaqz.webp'
    },
    {
      id: 3,
      name: 'Venessa Blink BLDC Ceiling Fan',
      tagline: 'Intuitive Control, Intelligent Cooling',
      colors: ['Smoke Brown'],
      features: [
        { icon: <RotateCw className="w-5 h-5" />, text: 'Reverse Rotation' },
        { icon: <Clock className="w-5 h-5" />, text: 'Timer (2H/4H/8H)' },
        { icon: <Zap className="w-5 h-5" />, text: 'Boost Speed' },
        { icon: <Lightbulb className="w-5 h-5" />, text: '7-Speed LED Indicator' },
        { icon: <Power className="w-5 h-5" />, text: 'Dedicated On/Off' },
        { icon: <Moon className="w-5 h-5" />, text: 'Sleep Mode' },
        { icon: <Smartphone className="w-5 h-5" />, text: 'RF Remote' },
        { icon: <Check className="w-5 h-5" />, text: '100% Copper Winding' }
      ],
      specs: {
        motorSpeed: '380 RPM',
        power: '32W Max',
        sweepSize: '1200 mm',
        airDelivery: '220 CMM',
        speeds: '6 speed',
        thd: '<10%'
      },
      pricing: {
        mrp: 5499,
        selling: 2999
      },
      image: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf4_acuaqz.webp'
    }
  ];




   const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    requirement: 'Residential',
    quantity: '',
    model: 'Not Sure Yet',
    source: ''
  });

  const faqs = [
    {
      question: "What is a BLDC motor and how does it save energy?",
      answer: "BLDC (Brushless Direct Current) motors are advanced motors that use electronic commutation instead of traditional brushes. This design significantly reduces friction and heat, leading to much higher energy efficiency. Our fans consume a maximum of just 32 Watts compared to 75-90 Watts of conventional fans, resulting in substantial electricity savings."
    },
    {
      question: "How much energy can I save with an Adhunik Air Care BLDC fan?",
      answer: "You can save up to 65% on your electricity consumption compared to traditional fans, depending on usage patterns. Our fans consume as little as 3 Watts at the lowest speed."
    },
    {
      question: "Are Adhunik Air Care fans really quiet?",
      answer: "Yes, our BLDC fans are engineered for whisper-quiet operation, ensuring a peaceful environment without distracting motor noise."
    },
    {
      question: "Do these fans run longer on an inverter?",
      answer: "Absolutely. Adhunik Air Care BLDC fans run up to 3 times longer on your home inverter compared to conventional fans, providing extended comfort during power outages."
    },
    {
      question: "What is the warranty period for Adhunik Air Care BLDC fans?",
      answer: "All Adhunik Air Care BLDC Ceiling Fans come with a comprehensive 2-Year Warranty."
    },
    {
      question: "Are Adhunik Air Care fans remote controlled?",
      answer: "Yes, all our BLDC models come with a convenient RF Remote Control for easy operation."
    },
    {
      question: "Are Adhunik Air Care fans made in India?",
      answer: "Yes, we are proud to state that Adhunik Air Care BLDC Fans are Made In India."
    },
    {
      question: "What are the available colors and designs?",
      answer: "Our SimpleX model is available in White and Cherry Brown. The Venessa Lumo and Venessa Blink models are available in Smoke Brown."
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log(formData);
  };



    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 md:px-14 py-12 mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Gallery Section */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl overflow-hidden relative group">
                            <div className="relative h-96 w-full">
                                <img
                                    src={galleryImages[currentImageIndex]}
                                    alt={`${currentFan.name} - ${currentVariant.color}`}
                                    className="w-full h-full transition-opacity duration-300 object-center object-contain"
                                />
                            </div>
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
                        <div className="grid grid-cols-3 gap-4">
                            {galleryImages.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`relative bg-white rounded-xl overflow-hidden cursor-pointer transition-all border-2 ${currentImageIndex === index ? 'border-cyan-500 shadow-lg' : 'border-transparent hover:border-gray-200'}`}
                                >
                                    <div className="relative h-28 w-full">
                                        <img
                                            src={img}
                                            alt={`${currentFan.name} thumbnail ${index + 1}`}
                                            className="h-full w-full object-center object-contain"
                                        />
                                    </div>
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${currentImageIndex === index ? 'bg-cyan-500' : 'bg-transparent'}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info Section */}
                    <div className="space-y-8">
                        {/* Color Selector */}


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

                        {showColorSelector && (
                            <div className="flex flex-col space-y-3">
                                <span className="text-sm font-medium text-gray-700">Color: {currentVariant.color}</span>
                                <div className="flex space-x-3">
                                    {currentFan.variants.map((variant, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedVariant(index)}
                                            className={`px-4 py-2 rounded-md border-2 transition-all ${selectedVariant === index
                                                ? 'border-cyan-600 bg-cyan-50'
                                                : 'border-gray-200 hover:border-gray-300'}`}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="w-5 h-5 rounded-full border border-gray-200"
                                                    style={{
                                                        backgroundColor: variant.color.includes('Brown') ? '#8c4458' : '#ffffff',
                                                    }}
                                                />
                                                <span>{variant.color}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
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
                                <span className="text-4xl font-bold text-cyan-700">₹{currentVariant.price.toLocaleString()}</span>
                                <span className="ml-3 text-xl text-gray-500 line-through">₹{currentVariant.regularPrice.toLocaleString()}</span>
                                <span className="ml-3 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Save ₹{(currentVariant.regularPrice - currentVariant.price).toLocaleString()}
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
                                <MessageSquareQuote className="mr-2" />
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
                        <nav className="flex flex-col md:flex-row md:space-x-8">
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
                                Item Details
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
                            <div className="w-full text-wrap gap-6">
                                {currentFan.techSpecs.map((section, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-4">
                                        <h4 className="font-bold text-lg text-gray-900 mb-4">{section.category}</h4>
                                        <ul className="space-y-3">
                                            {section.items.map((item, i) => (
                                                <li key={i} className="flex flex-col">
                                                    <span className="text-gray-600">{item.name}</span>
                                                    <span className="text-gray-400 font-medium text-left">{item.value}</span>
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
                                            Our products come with a comprehensive {currentFan.id === 1 ? '2 year' : '3 year'} warranty covering all manufacturing defects.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-3">Installation & Support</h4>
                                        <p className="text-gray-600 mb-4">
                                            Free professional installation available. Our support team is available 7 days a week.
                                        </p>
                                        <Link href="support-form" className="bg-cyan-600 w-56 text-white px-5 py-2 rounded-lg hover:bg-cyan-700 transition flex items-center">
                                            <MessageSquare className="w-4 h-4 mr-2" />
                                            Contact Support
                                        </Link>
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
                        {[
                            {
                                id: 1,
                                rating: 5,
                                comment: "The energy savings are incredible! My electricity bill reduced by 40% after replacing all fans with these BLDC models.",
                                name: "Rahul Sharma",
                                location: "Mumbai",
                                date: "3 months ago",
                                avatar: "https://images.unsplash.com/photo-1743448748313-80eb7f9eb2b7?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                purchase: "Venessa Blink"
                            },
                            {
                                id: 2,
                                rating: 4,
                                comment: "Super quiet operation and the remote control is very convenient. The LED light is bright enough for my bedroom.",
                                name: "Priya Patel",
                                location: "Bangalore",
                                date: "2 months ago",
                                avatar: "https://images.unsplash.com/photo-1743448748313-80eb7f9eb2b7?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                purchase: "Venessa Lumo"
                            },
                            {
                                id: 3,
                                rating: 5,
                                comment: "The white color option matches perfectly with my modern decor. Installation was quick and the airflow is excellent.",
                                name: "Arjun Mehta",
                                location: "Delhi",
                                date: "1 month ago",
                                avatar: "https://images.unsplash.com/photo-1743448748313-80eb7f9eb2b7?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                purchase: "SimpleX (White)"
                            },

                        ].slice(0, 3).map((review) => (
                            <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
                                        />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-500">{review.rating}.0</span>
                                </div>
                                <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full  mr-3 overflow-hidden">
                                            {review.avatar && (
                                                <img
                                                    src={review.avatar}
                                                    alt={review.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">{review.name}</h4>
                                            <p className="text-sm text-gray-500">{review.location} • {review.date}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs bg-cyan-50 text-cyan-600 px-2 py-1 rounded">
                                        {review.purchase}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="mt-8 text-center">
        <button className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium">
            View all testimonials
            <ChevronRight className="w-4 h-4 ml-1" />
        </button>
    </div> */}
                </div>



                <div className="bg-gray-50">
                    {/* Hero Section */}
                    <section className="bg-gradient-to-r from-cyan-800 to-cyan-600 rounded-2xl text-white py-10 px-4">
                        <div className="container px-5 mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                        Adhunik Air Care BLDC Ceiling Fans
                                    </h1>
                                    <p className="text-xl mb-8 text-cyan-100">
                                        The Future of Efficient Cooling. Reclaim Your Savings.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="bg-white text-cyan-700 px-8 py-4 rounded-lg font-bold flex items-center justify-center hover:bg-cyan-50 transition">
                                            <Calculator className="mr-2" />
                                            Calculate Your Savings
                                        </button>
                                        <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold flex items-center justify-center hover:bg-white/10 transition">
                                            Explore Models
                                            <ChevronRight className="ml-2" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/20">
                                        <div className="bg-white rounded-xl p-6 shadow-2xl">
                                            <img
                                                src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf2_qcdojy.webp"
                                                alt="Adhunik BLDC Fan"
                                                className="w-full h-96 object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section className="py-16 px-4 bg-white">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Innovation, Quality, and Trusted Performance
                                </h2>
                                <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                    At Adhunik Air Care, we are dedicated to making your living spaces more comfortable,
                                    stylish, and energy-efficient with our advanced BLDC ceiling fans.
                                </p>
                            </div>

                            <div className="grid   grid-cols-1 md:grid-cols-2   gap-8 items-center">
                                

                                    <img
                                        src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1750481343/cf4_acuaqz.webp"
                                        alt="Adhunik Air Care Fan"
                                        className="rounded-xl shadow-lg h-96 w-fit
                                        "
                                    />
                                    
                                
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                        Smart Air Solutions for Stylish Living
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Our BLDC ceiling fans combine powerful air delivery with low electricity consumption
                                        and whisper-quiet performance. Designed to fit perfectly into today's modern lifestyle,
                                        whether you're upgrading your home or planning a smart office setup.
                                    </p>
                                    <div className="flex items-center text-cyan-600 font-medium">
                                        <BadgeCheck className="mr-2" />
                                        <span>Backed by the trusted name of Adhunik Powertech</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Section */}
                    <section className="py-16 px-4 bg-gray-50">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Why Choose Adhunik Air Care BLDC Fans?
                                </h2>
                                <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                    Unrivaled Performance & Savings with our revolutionary cooling technology
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer ${expandedFeature === index ? 'ring-2 ring-cyan-500' : ''}`}
                                        onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                                    >
                                        <div className="flex items-start mb-4">
                                            <div className="mr-4">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                                        </div>
                                        <p className="text-gray-700 mb-3">{feature.description}</p>
                                        {expandedFeature === index && (
                                            <p className="text-gray-600 text-sm">{feature.details}</p>
                                        )}
                                        <div className="mt-4 flex justify-end">
                                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedFeature === index ? 'rotate-180' : ''}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Energy Savings Section */}
                    <section className="py-16 px-4 bg-white">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                        Unmatched Energy Efficiency
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <Check className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                    Cut Electricity Bills Drastically
                                                </h3>
                                                <p className="text-gray-600">
                                                    Adhunik Air Care BLDC Fans consume a maximum of just 32 Watts at top speed -
                                                    up to 65% less power than conventional fans (75-90 Watts).
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                    Remarkable Low-Speed Consumption
                                                </h3>
                                                <p className="text-gray-600">
                                                    At Speed 1, our fans consume as little as 3 Watts for ultra-efficient operation.
                                                </p>
                                            </div>
                                        </div>
                                        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium flex items-center mt-6">
                                            <Calculator className="mr-2" />
                                            Calculate Your Savings
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                                            Power Consumption at Different Speeds
                                        </h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Speed
                                                        </th>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            RPM
                                                        </th>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Power (Watts)
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {powerConsumptionData.map((data, index) => (
                                                        <tr key={index}>
                                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                {data.speed}
                                                            </td>
                                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                                                {data.rpm}
                                                            </td>
                                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                                                {data.watts}W
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
               
                </div>



                   <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our BLDC Fan Range
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium Performance, Unbeatable Value
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${expandedProduct === product.id ? 'ring-2 ring-cyan-500' : 'hover:shadow-lg'}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
                {/* Product Image */}
                <div className="flex justify-center">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="lg:col-span-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                      <p className="text-lg text-cyan-600 mt-1">{product.tagline}</p>
                    </div>
                    <button 
                      onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                      className="p-2 text-gray-500 hover:text-gray-700"
                    >
                      <ChevronDown className={`w-6 h-6 transition-transform ${expandedProduct === product.id ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Color Options */}
                  <div className="mt-4">
                    <span className="text-sm font-medium text-gray-500">Color Options:</span>
                    <div className="flex space-x-2 mt-2">
                      {product.colors.map((color, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 text-sm rounded-full border"
                          style={{ 
                            backgroundColor: color.includes('Brown') ? '#5c4d3c' : color.includes('White') ? '#ffffff' : '#6b7280',
                            color: color.includes('White') ? '#000000' : '#ffffff',
                            borderColor: color.includes('White') ? '#d1d5db' : 'transparent'
                          }}
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-cyan-600 mr-2">{feature.icon}</span>
                          <span className="text-gray-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mt-6 bg-gradient-to-r from-cyan-50 to-white p-4 rounded-lg border border-cyan-100">
                    <div className="flex items-end">
                      <span className="text-3xl font-bold text-cyan-700">₹{product.pricing.selling.toLocaleString()}</span>
                      <span className="ml-3 text-lg text-gray-500 line-through">₹{product.pricing.mrp.toLocaleString()}</span>
                      <span className="ml-auto bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Save ₹{(product.pricing.mrp - product.pricing.selling).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="mt-6 w-fit bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition">
                    Request Quote for {product.name.split(' ')[1]}
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedProduct === product.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Specifications */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h4>
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                          <tbody className="bg-white divide-y divide-gray-200">
                            {Object.entries(product.specs).map(([key, value]) => (
                              <tr key={key}>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1')}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                  {value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose {product.name.split(' ')[1]}?</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">2-Year Warranty for peace of mind</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">Made in India with premium materials</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">Energy savings up to 65% compared to conventional fans</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">Runs 3X longer on inverter during power cuts</span>
                        </li>
                      </ul>

                      <div className="mt-6 flex space-x-4">
                       
                        <button className="flex-1 bg-gray-900 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center hover:bg-black transition">
                          <Phone className="mr-2" />
                          Call for Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>



     <div className="bg-gray-50">
      {/* CTA Section */}
      {/* <section className="py-16 px-4 bg-gradient-to-r from-cyan-800 to-cyan-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Space with Adhunik Air Care BLDC Fans?
              </h2>
              <p className="text-xl mb-8 text-cyan-100">
                Join thousands of satisfied customers in Gurugram, Delhi, and Across India who are enjoying unparalleled comfort and saving on electricity bills.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-300" />
                  <span>2-Year Warranty</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-300" />
                  <span>Made in India</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-300" />
                  <span>65% Energy Saving</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8 text-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Get a Personalized Energy Savings Report & Free Quote Today!
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">City/Pincode</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Gurugram, Delhi, or specify other Indian city"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Type of Requirement</label>
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Bulk Order">Bulk Order</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Approx. Number of Fans Needed</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Specific Model of Interest (Optional)</label>
                  <select
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="Not Sure Yet">Not Sure Yet</option>
                    <option value="SimpleX">SimpleX</option>
                    <option value="Venessa Lumo">Venessa Lumo</option>
                    <option value="Venessa Blink">Venessa Blink</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">How did you hear about us?</label>
                  <input
                    type="text"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  GET MY FREE QUOTE & ENERGY SAVINGS REPORT!
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your information is safe with us. We respect your privacy and will only use your details to provide you with a personalized solution.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${activeFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="p-6 pt-0 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Call Us</h3>
              <p className="text-cyan-600 font-medium">+91 8287885885</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email Us</h3>
              <p className="text-cyan-600 font-medium"> info@adhunikpowertech.com </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Visit Us</h3>
              <p className="text-cyan-600 font-medium">DCG1-0102, Tower -1, DLF Corporate Green Sector-74A Gurugram (HR) 122004</p>
            </div>
          </div>
        </div>
      </section>
    </div>
            </main>
        </div>
    );
};

export default FanProductPage;