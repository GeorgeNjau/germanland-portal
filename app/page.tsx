'use client';

import React, { useState} from 'react';
import {
    Award,
    BookOpen,
    Calendar,
    CheckCircle, ChevronDown,
    Clock,
    Globe,
    GraduationCap, Mail, MapPin,
    Menu, MessageCircle, Phone, Star,
    TrendingUp,
    Users,
    X
} from "lucide-react";

type ProgramTab = 'physical-weekday' | 'physical-weekend' | 'online-weekday' | 'online-weekend';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<ProgramTab>('physical-weekday')
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        level: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');

    const programs = {
        'physical-weekday': [
            {level: 'A1', duration: '3 Months', amount: '24,000', description: 'Complete beginner level'},
            {level: 'A2', duration: '3 Months', amount: '24,000', description: 'Elementary level'},
            {level: 'B1', duration: '3 Months', amount: '24,000', description: 'Intermediate level'},
            {level: 'B2', duration: '4 ½ Months', amount: '37,000', description: 'Upper intermediate'},
            {level: 'B2*1', duration: '2 Months', amount: '17,000', description: 'B2 Part 1'},
            {level: 'B2*2', duration: '2 ½ Months', amount: '20,000', description: 'B2 Part 2 + Exam Prep'},
            {level: 'C1', duration: '6 Months', amount: '60,000', description: 'Advanced level'}
        ],
        'physical-weekend': [
            {level: 'A1', duration: '1 ½ Months', amount: '24,000', description: 'Complete beginner level'},
            {level: 'A2', duration: '1 ½ Months', amount: '24,000', description: 'Elementary level'},
            {level: 'B1', duration: '1 ½ Months', amount: '24,000', description: 'Intermediate level'},
            {level: 'B2', duration: '2 ½ Months', amount: '37,000', description: 'Upper intermediate'},
            {level: 'B2*1', duration: '1 Month', amount: '17,000', description: 'B2 Part 1'},
            {level: 'B2*2', duration: '1 ½ Months', amount: '20,000', description: 'B2 Part 2 + Exam Prep'},
            {level: 'C1', duration: '3 Months', amount: '60,000', description: 'Advanced level'}
        ],
        'online-weekday': [
            {level: 'A1', duration: '3 Months', amount: '24,000', description: 'Complete beginner level'},
            {level: 'A2', duration: '3 Months', amount: '24,000', description: 'Elementary level'},
            {level: 'B1', duration: '3 Months', amount: '24,000', description: 'Intermediate level'},
            {level: 'B2', duration: '4 Months', amount: '32,000', description: 'Upper intermediate'},
            {level: 'C1', duration: '6 Months', amount: '60,000', description: 'Advanced level'}
        ],
        'online-weekend': [
            {level: 'A1', duration: '1 ½ Months', amount: '24,000', description: 'Complete beginner level'},
            {level: 'A2', duration: '1 ½ Months', amount: '24,000', description: 'Elementary level'},
            {level: 'B1', duration: '1 ½ Months', amount: '24,000', description: 'Intermediate level'},
            {level: 'B2', duration: '2 Months', amount: '32,000', description: 'Upper intermediate'},
            {level: 'C1', duration: '3 Months', amount: '60,000', description: 'Advanced level'}
        ]
    };
    const testimonials = [
        {
            name: "Sarah Mwangi",
            level: "B2 Graduate",
            text: "Germanland Connections helped me achieve my dream of studying in Germany. The instructors are patient, knowledgeable, and genuinely invested in your success.",
            rating: 5
        },
        {
            name: "David Ochieng",
            level: "C1 Graduate",
            text: "I started as a complete beginner and now I work for a German company in Nairobi. The structured curriculum and flexible schedule made all the difference.",
            rating: 5
        },
        {
            name: "Grace Wanjiku",
            level: "B1 Graduate",
            text: "Best decision I made this year! The online classes are just as effective as physical ones, and the teachers make learning fun and engaging.",
            rating: 5
        }
    ];

    const upcomingCourses = [
        { level: 'A1', startDate: 'Dec 2, 2025', type: 'Physical - Weekday', spots: 5 },
        { level: 'A2', startDate: 'Dec 9, 2025', type: 'Online - Weekend', spots: 8 },
        { level: 'B1', startDate: 'Dec 16, 2025', type: 'Physical - Weekend', spots: 3 },
        { level: 'B2', startDate: 'Jan 6, 2026', type: 'Online - Weekday', spots: 10 },
    ];

    const successStories = [
        {
            name: "John Kamau",
            achievement: "Software Engineer in Berlin",
            story: "After completing C1 at Germanland, I secured a job at a tech startup in Berlin. The language skills gave me confidence in interviews and daily work.",
            image: "👨‍💻"
        },
        {
            name: "Mary Njeri",
            achievement: "Masters Student in Munich",
            story: "Passed my B2 exam with 85% and got accepted to TU Munich. The exam preparation was thorough and the teachers knew exactly what to focus on.",
            image: "👩‍🎓"
        },
        {
            name: "Peter Otieno",
            achievement: "Working at Goethe-Institut",
            story: "From A1 beginner to working at the Goethe-Institut Nairobi. The journey took 2 years but Germanland made it achievable and enjoyable.",
            image: "👨‍🏫"
        }
    ];

    const whyLearnGerman = [
        {
            icon: TrendingUp,
            title: "Career Opportunities",
            description: "Germany has the strongest economy in Europe with numerous job opportunities in tech, engineering, and healthcare."
        },
        {
            icon: GraduationCap,
            title: "Study in Germany",
            description: "Free or low-cost university education at world-class institutions. Over 1,500 degree programs in English and German."
        },
        {
            icon: Globe,
            title: "Global Language",
            description: "Spoken by 100+ million people across Europe. Opens doors in Austria, Switzerland, Luxembourg, and more."
        },
        {
            icon: Users,
            title: "German Companies in Kenya",
            description: "Many German companies operate in Kenya. Fluency in German gives you a competitive advantage in the job market."
        }
    ];

    const faqs = [
        {
            question: "Do I need any prior knowledge to start?",
            answer: "Not at all! Our A1 level is designed for complete beginners with zero German knowledge. We'll guide you through everything from the alphabet to basic conversations."
        },
        {
            question: "What is the CEFR framework?",
            answer: "CEFR (Common European Framework of Reference) is the international standard for language proficiency. It ranges from A1 (beginner) to C2 (mastery). All our courses are aligned with these standards, making your certification recognized globally."
        },
        {
            question: "Can I switch between online and physical classes?",
            answer: "Yes! We understand schedules change. Contact us to discuss switching between formats, though availability may vary by level and time."
        },
        {
            question: "What materials do I need?",
            answer: "All learning materials and textbooks are included in your course fee. For online classes, you'll need a computer/tablet with stable internet and a quiet space to study."
        },
        {
            question: "Do you offer exam preparation?",
            answer: "Absolutely! Our B2*2 and C1 courses include specific preparation for internationally recognized German language exams like Goethe-Zertifikat and TestDaF."
        },
        {
            question: "What are the class sizes?",
            answer: "We maintain small class sizes (8-12 students) to ensure everyone gets individual attention and plenty of speaking practice."
        },
        {
            question: "How do I make payment?",
            answer: "Pay via M-Pesa to Paybill 400200, Account 40006831. You can also contact us for alternative payment arrangements or installment plans."
        },
        {
            question: "What happens if I miss a class?",
            answer: "We provide class recordings for online sessions and makeup arrangements for physical classes. We want to ensure you don't fall behind."
        }
    ];

    const features = [
        { icon: Users, title: 'Expert Instructors', description: 'Learn from certified German language teachers with years of experience' },
        { icon: BookOpen, title: 'CEFR Aligned', description: 'All courses follow the Common European Framework of Reference standards' },
        { icon: Clock, title: 'Flexible Schedule', description: 'Choose between weekday and weekend classes, online or in-person' },
        { icon: Award, title: 'Proven Results', description: 'High success rates in international German language examinations' }
    ];

    const levels = [
        { level: 'A1-A2', title: 'Beginner', description: 'Perfect for those starting their German language journey. Learn basic phrases, introduce yourself, and handle everyday situations.' },
        { level: 'B1-B2', title: 'Intermediate', description: 'Develop conversational fluency, understand complex texts, and prepare for work or study opportunities in German-speaking countries.' },
        { level: 'C1', title: 'Advanced', description: 'Master sophisticated German for professional and academic settings. Express ideas fluently and understand virtually everything.' }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.phone) {
            setFormStatus('Please fill in at least your name and phone number');
            return;
        }

        // WhatsApp Integration
        const whatsappMessage = `
🎓 *New Inquiry from Website*

*Name:* ${formData.name}
*Email:* ${formData.email || 'Not provided'}
*Phone:* ${formData.phone}
*Interested Level:* ${formData.level || 'Not specified'}

*Message:*
${formData.message || 'No additional message'}
    `.trim();

        const whatsappUrl = `https://wa.me/254740593635?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        setFormStatus('Opening WhatsApp...');

        // Reset form
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                level: '',
                message: ''
            });
            setFormStatus('Message sent! We\'ll respond shortly.');
            setTimeout(() => setFormStatus(''), 3000);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Your entire component JSX here */}
            {/* German Flag Stripe - Top */}
            <div className="h-2 w-full flex">
                <div className="flex-1 bg-black"></div>
                <div className="flex-1 bg-red-600"></div>
                <div className="flex-1 bg-yellow-400"></div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-3">
                            {/* German Flag Logo */}
                            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md flex flex-col">
                                <div className="h-1/3 bg-black"></div>
                                <div className="h-1/3 bg-red-600"></div>
                                <div className="h-1/3 bg-yellow-400"></div>
                            </div>
                            <span className="text-xl font-bold text-gray-900">Germanland Connections</span>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <a href="#home" className="text-gray-700 hover:text-red-600 transition">Home</a>
                            <a href="#programs" className="text-gray-700 hover:text-red-600 transition">Programs</a>
                            <a href="#schedule" className="text-gray-700 hover:text-red-600 transition">Schedule</a>
                            <a href="#success" className="text-gray-700 hover:text-red-600 transition">Success Stories</a>
                            <a href="#faq" className="text-gray-700 hover:text-red-600 transition">FAQ</a>
                            <a href="#contact" className="text-gray-700 hover:text-red-600 transition">Contact</a>
                        </div>

                        <button className="hidden md:block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-red-800 transition shadow-md">
                            Enroll Now
                        </button>

                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>

                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 py-3 space-y-3">
                            <a href="#home" className="block text-gray-700">Home</a>
                            <a href="#programs" className="block text-gray-700">Programs</a>
                            <a href="#schedule" className="block text-gray-700">Schedule</a>
                            <a href="#success" className="block text-gray-700">Success Stories</a>
                            <a href="#faq" className="block text-gray-700">FAQ</a>
                            <a href="#contact" className="block text-gray-700">Contact</a>
                            <button className="w-full bg-red-600 text-white px-6 py-2 rounded-lg">Enroll Now</button>
                        </div>
                    </div>
                )}

            </nav>

            {/* Hero Section with German Flag Integration */}
<section id="home" className="pt-16 pb-16 px-4 bg-gradient-to-br from-gray-50 via-white to-red-50">
    <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                {/* German Flag Accent */}
                <div className="flex items-center space-x-2 mb-4">
                    <div className="h-1 w-16 bg-black"></div>
                    <div className="h-1 w-16 bg-red-600"></div>
                    <div className="h-1 w-16 bg-yellow-400"></div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Master German with Kenya&#39;s Leading Language Institute
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    From complete beginners to advanced speakers, we offer comprehensive German language courses aligned with international CEFR standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#programs" className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition transform hover:scale-105 shadow-lg text-center">
                        View Programs
                    </a>
                    <a href="#contact" className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition text-center">
                        Contact Us
                    </a>
                </div>
                <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>CEFR Certified</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Flexible Schedules</span>
                    </div>
                </div>
            </div>
            <div className="relative">
                {/* German Flag Integrated Design */}
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    {/* Clear German Flag - Full Background */}
                    <div className="absolute inset-0 flex flex-col">
                        <div className="flex-1 bg-black"></div>
                        <div className="flex-1" style={{ backgroundColor: '#DD0000' }}></div>
                        <div className="flex-1" style={{ backgroundColor: '#FFCE00' }}></div>
                    </div>
                    {/* Content with semi-transparent background */}
                    <div className="relative z-10 text-center p-8 h-full flex flex-col items-center justify-center bg-white/85">
                        <div className="text-8xl mb-4">
                            <p className="text-3xl font-bold text-gray-900">Sprechen Sie Deutsch?</p>
                            <p className="text-gray-700 mt-2 text-lg">Start your journey today!</p>

                            {/* Small German flag accent with proper colors */}
                            <div className="mt-8 w-32 h-20 rounded-lg shadow-2xl overflow-hidden border-4 border-white">
                                <div className="h-1/3 bg-black"></div>
                                <div className="h-1/3" style={{ backgroundColor: '#DD0000' }}></div>
                                <div className="h-1/3" style={{ backgroundColor: '#FFCE00' }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {features.map((feature, index) =>(
                            <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition group">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                                    <feature.icon className="w-8 h-8 text-red-600"/>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Learn German Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="h-1 w-12 bg-white"></div>
                            <div className="h-1 w-12 bg-red-600"></div>
                            <div className="h-1 w-12 bg-yellow-400"></div>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">Why Learn German?</h2>
                        <p className="text-xl text-gray-300">Open doors to incredible opportunities across the globe</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyLearnGerman.map((item, index) =>(
                            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition">
                                <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <item.icon className="w-8 h-8 text-white"/>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-300 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Language Levels */}
            <section id="about" className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="h-1 w-12 bg-black"></div>
                            <div className="h-1 w-12 bg-red-600"></div>
                            <div className="h-1 w-12 bg-yellow-400"></div>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Level</h2>
                        <p className="text-xl text-gray-600">All courses follow the CEFR (Common European Framework of Reference)</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {levels.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-red-600">
                                <div className="text-3xl font-bold text-red-600 mb-2">{item.level}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Schedule Section */}
            <section id="schedule" className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="h-1 w-12 bg-black"></div>
                            <div className="h-1 w-12 bg-red-600"></div>
                            <div className="h-1 w-12 bg-yellow-400"></div>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Course Schedule</h2>
                        <p className="text-xl text-gray-600">Register early - spots fill up fast!</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {upcomingCourses.map((course, index) => (
                            <div key={index} className="bg-gradient-to-br from-white to-red-50 border-red-200 rounded-xl p-6 however:shadow-g transition">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-2xl font-bold text-red-600">{course.level}</div>
                                    <Calendar className="w-6 h-6 text-red-600"/>
                                </div>
                                <div className="mb-3">
                                    <div className="text-sm text-gray-600 mb-1">Starts</div>
                                    <div className="font-semibold text-gray-900">{course.startDate}</div>
                                </div>
                                <div className="mb-3">
                                    <div className="text-sm text-gray-600 mb-1">Format</div>
                                    <div className="font-semibold text-gray-900">{course.type}</div>
                                </div>
                                <div className="flex items-center justify-between pt-3 border-t">
                                    <span className="text-sm text-gray-600">Available spots</span>
                                    <span className={`font-bold ${course.spots <= 5 ? 'text-red-600' : 'text-green-600'}`}>{course.spots}</span>
                                </div>
                                <button className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition">Reserve Spot</button>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

            {/* Programs & Pricing */}
            <section id="programs" className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="h-1 w-12 bg-black"></div>
                            <div className="h-1 w-12 bg-red-600"></div>
                            <div className="h-1 w-12 bg-yellow-400"></div>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
                        <p className="text-xl text-gray-600">Flexible options to suit your schedule and learning style</p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <button
                            onClick={() => setActiveTab('physical-weekday')}
                            className={`px-6 py-3 rounded-lg font-semibold transition ${
                                activeTab === 'physical-weekday'
                                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                            }`}
                        > Physical Classes (Weekday)
                        </button>
                        <button
                            onClick={() => setActiveTab('physical-weekend')}
                            className={`px-6 py-3 rounded-lg font-semibold transition ${
                                activeTab === 'physical-weekend'
                                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                            }`}
                        >
                            Physical Classes (Weekend)
                        </button>
                        <button
                            onClick={() => setActiveTab('online-weekday')}
                            className={`px-6 py-3 rounded-lg font-semibold transition ${
                                activeTab === 'online-weekday'
                                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                            }`}
                        >
                            Online Classes (Weekday)
                        </button>
                        <button
                            onClick={() => setActiveTab('online-weekend')}
                            className={`px-6 py-3 rounded-lg font-semibold transition ${
                                activeTab === 'online-weekend'
                                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                            }`}
                        >
                            Online Classes (Weekend)
                        </button>
                    </div>

                    {/* Programs Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {programs[activeTab].map((program, index) => (
                            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-600 hover:shadow-lg transition">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{program.level}</h3>
                                        <p className="text-sm text-gray-600">{program.description}</p>
                                    </div>
                                    <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                                        {program.duration}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="text-3xl font-bold text-gray-900">
                                        KES {program.amount}
                                    </div>
                                </div>
                                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition shadow-md">
                                    Enroll Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section id="success" className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="h-1 w-12 bg-black"></div>
                            <div className="h-1 w-12 bg-red-600"></div>
                            <div className="h-1 w-12 bg-yellow-400"></div>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
                        <p className="text-xl text-gray-600">Our students achieve remarkable things</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {successStories.map((story, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-red-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                                <div className="text-6xl mb-4 text-center">{story.image}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                                <div className="text-red-600 font-semibold mb-4">{story.achievement}</div>
                                <p className="text-gray-700 italic">&#34;{story.story}&#34;</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="h-1 w-12 bg-black"></div>
                            <div className="h-1 w-12 bg-red-600"></div>
                            <div className="h-1 w-12 bg-yellow-400"></div>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
                        <p className="text-xl text-gray-600">Join hundreds of successful German language learners</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">&#34;{testimonial.text}&#34;</p>
                                <div className="border-t pt-4">
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-red-600">{testimonial.level}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="h-1 w-12 bg-black"></div>
                            <div className="h-1 w-12 bg-red-600"></div>
                            <div className="h-1 w-12 bg-yellow-400"></div>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Classroom Experience</h2>
                        <p className="text-xl text-gray-600">See our students in action</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Image Placeholder 1 */}
                        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition">
                            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-2">📚</div>
                                    <p className="text-gray-600 font-semibold">Classroom Sessions</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                                <p className="text-white font-semibold">Interactive learning environment</p>
                            </div>
                        </div>

                        {/* Image Placeholder 2 */}
                        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition">
                            <div className="aspect-video bg-gradient-to-br from-red-100 to-yellow-100 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-2">👥</div>
                                    <p className="text-gray-600 font-semibold">Group Activities</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                                <p className="text-white font-semibold">Collaborative learning sessions</p>
                            </div>
                        </div>

                        {/* Image Placeholder 3 */}
                        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition">
                            <div className="aspect-video bg-gradient-to-br from-gray-200 to-red-100 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-2">🎓</div>
                                    <p className="text-gray-600 font-semibold">Graduation Day</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                                <p className="text-white font-semibold">Celebrating student success</p>
                            </div>
                        </div>

                        {/* Image Placeholder 4 */}
                        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition">
                            <div className="aspect-video bg-gradient-to-br from-yellow-100 to-red-100 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-2">💻</div>
                                    <p className="text-gray-600 font-semibold">Online Classes</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                                <p className="text-white font-semibold">Virtual learning platform</p>
                            </div>
                        </div>

                        {/* Image Placeholder 5 */}
                        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition">
                            <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-2">🗣️</div>
                                    <p className="text-gray-600 font-semibold">Speaking Practice</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                                <p className="text-white font-semibold">Conversation workshops</p>
                            </div>
                        </div>

                        {/* Image Placeholder 6 */}
                        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition">
                            <div className="aspect-video bg-gradient-to-br from-red-100 to-gray-200 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-2">🎉</div>
                                    <p className="text-gray-600 font-semibold">Cultural Events</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                                <p className="text-white font-semibold">German cultural celebrations</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* FAQ Section */}
            <section id="faq" className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="h-1 w-12 bg-black"></div>
                            <div className="h-1 w-12 bg-red-600"></div>
                            <div className="h-1 w-12 bg-yellow-400"></div>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">Everything you need to know about our courses</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-red-600 transition">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition"
                                >
                                    <span className="font-semibold text-left text-gray-900">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-red-600 transition-transform ${
                                            activeFaq === index ? 'transform rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                {activeFaq === index && (
                                    <div className="px-6 py-4 bg-gray-50 border-t">
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Contact Section with German Flag Design */}
            <section id="contact" className="py-16 px-4 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white relative overflow-hidden">
                {/* German Flag Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="h-1/3 bg-black"></div>
                    <div className="h-1/3 bg-red-600"></div>
                    <div className="h-1/3 bg-yellow-400"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="h-1 w-12 bg-white"></div>
                                <div className="h-1 w-12 bg-red-600"></div>
                                <div className="h-1 w-12 bg-yellow-400"></div>
                            </div>
                            <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
                            <p className="text-xl mb-8 text-gray-200">
                                Join hundreds of successful students who have achieved their German language goals with us.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-300">Call or WhatsApp</div>
                                        <a href="https://wa.me/254740593635" className="font-semibold hover:text-yellow-400 transition">0740 593 635 (Kennedy B.)</a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-300">M-Pesa Payment</div>
                                        <div className="font-semibold">Paybill: 400200 | Acc: 40006831</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-300">Visit Us</div>
                                        <div className="font-semibold">Nairobi, Kenya</div>
                                    </div>
                                </div>
                        </div>
                    </div>
                        <div className="bg-white rounded-xl p-8 text-gray-900 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name *"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number *"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                />
                                <select
                                    name="level"
                                    value={formData.level}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                >
                                    <option value="">Select Your Level</option>
                                    <option value="A1">A1 - Complete Beginner</option>
                                    <option value="A2">A2 - Elementary</option>
                                    <option value="B1">B1 - Intermediate</option>
                                    <option value="B2">B2 - Upper Intermediate</option>
                                    <option value="C1">C1 - Advanced</option>
                                </select>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                ></textarea>
                                {formStatus && (
                                    <div className={`p-3 rounded-lg text-sm ${
                                        formStatus.includes('sent') || formStatus.includes('Opening')
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                        {formStatus}
                                    </div>
                                )}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition shadow-lg flex items-center justify-center space-x-2"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Send via WhatsApp</span>
                                </button>
                                <p className="text-xs text-gray-500 text-center">
                                    Your message will open in WhatsApp for instant communication
                                </p>
                            </div>
                        </div>
                </div>
                </div>
            </section>

            {/* Footer with German Flag */}
            <footer className="bg-gray-900 text-gray-300 py-12 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md flex flex-col">
                            <div className="h-1/3 bg-black"></div>
                            <div className="h-1/3 bg-red-600"></div>
                            <div className="h-1/3 bg-yellow-400"></div>
                        </div>
                        <span className="text-xl font-bold text-white">Germanland Connections</span>
                    </div>
                    <p className="mb-4">Your pathway to German language proficiency</p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="h-1 w-8 bg-black"></div>
                        <div className="h-1 w-8 bg-red-600"></div>
                        <div className="h-1 w-8 bg-yellow-400"></div>
                    </div>
                    <p className="text-sm text-gray-500">© 2026 Germanland Connections. All rights reserved.</p>
                </div>
            </footer>

            {/* German Flag Bottom Stripe */}
            <div className="h-2 w-full flex">
                <div className="flex-1 bg-black"></div>
                <div className="flex-1 bg-red-600"></div>
                <div className="flex-1 bg-yellow-400"></div>
            </div>

        </div>
  );
}
