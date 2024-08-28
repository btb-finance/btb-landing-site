"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import {
  ArrowRight,
  Zap,
  Shield,
  BarChart2,
  Droplet,
  RefreshCw,
  Coins,
  Lock,
  Smartphone,
  TrendingUp,
  Menu,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className={`card rounded-lg shadow-md ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`card-header p-4 ${className}`}>{children}</div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`card-content p-4 ${className}`}>{children}</div>
);

const Button = ({ children, variant = 'default', size = 'md', className = '', ...props }) => (
  <button
    className={`
      ${className}
      ${variant === 'outline' ? 'border-2' : ''}
      ${size === 'lg' ? 'px-6 py-3 text-lg' : 'px-4 py-2'}
      rounded-md transition-all duration-300 ease-in-out
    `}
    {...props}
  >
    {children}
  </button>
);

const Tabs = ({ children }) => <div className="tabs">{children}</div>;

const TabsList = ({ children }) => (
  <div className="tabs-list flex border-b mb-4">{children}</div>
);

const TabsTrigger = ({ children, value, active, onClick }) => (
  <button
    className={`
      tabs-trigger px-4 py-2 font-semibold
      ${active ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}
    `}
    onClick={() => onClick(value)}
  >
    {children}
  </button>
);

const TabsContent = ({ children, value, activeTab }) => (
  <div className={`tabs-content ${value === activeTab ? 'block' : 'hidden'}`}>
    {children}
  </div>
);

const TypewriterEffect = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayText}</span>;
};

const AnimatedFeature = ({ icon: Icon, title, description }) => {
  const [animate, setAnimate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="flex flex-row items-center space-x-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white p-4">
        <Icon className={`w-6 h-6 ${animate ? 'animate-bounce' : ''} ${isHovered ? 'animate-spin' : ''}`} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="p-4">
        <p>{isHovered ? <TypewriterEffect text={description} /> : description}</p>
      </CardContent>
    </Card>
  );
};

const AutoRebalanceAnimation = ({ currentPrice, priceRange }) => {
  const [isRebalancing, setIsRebalancing] = useState(false);

  useEffect(() => {
    if (currentPrice < priceRange.min || currentPrice > priceRange.max) {
      setIsRebalancing(true);
      setTimeout(() => setIsRebalancing(false), 2000);
    }
  }, [currentPrice, priceRange]);

  return (
    <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden mb-4">
      <div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 transition-all duration-500"
        style={{
          width: `${((currentPrice - priceRange.min) / (priceRange.max - priceRange.min)) * 100}%`,
        }}
      ></div>
      <div
        className="absolute top-0 h-full w-2 bg-yellow-400 transition-all duration-500"
        style={{
          left: `${((currentPrice - priceRange.min) / (priceRange.max - priceRange.min)) * 100}%`,
        }}
      ></div>
      {isRebalancing && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white">
          <RefreshCw className="animate-spin mr-2" />
          Rebalancing...
        </div>
      )}
    </div>
  );
};

const AutoFeeClaimAnimation = () => {
  const [feeAmount, setFeeAmount] = useState(0);
  const [isClaiming, setIsClaiming] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeeAmount((prev) => {
        const newAmount = prev + 0.1;
        if (newAmount >= 5 && !isClaiming) {
          setIsClaiming(true);
          setTimeout(() => {
            setIsClaiming(false);
            return 0;
          }, 2000);
        }
        return newAmount >= 5 ? 5 : newAmount;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-20 bg-gray-200 rounded-lg overflow-hidden">
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 to-green-300 transition-all duration-500"
        style={{ height: `${(feeAmount / 5) * 100}%` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <Coins className={`mb-1 ${isClaiming ? 'animate-bounce' : ''}`} />
        <span className="font-bold">{feeAmount.toFixed(1)} SOL</span>
      </div>
      {isClaiming && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white">
          <Zap className="animate-pulse mr-2" />
          Auto-claiming...
        </div>
      )}
    </div>
  );
};

const MultiAssetLiquidityPool = () => {
  const data = [
    { name: 'SOL', value: 40 },
    { name: 'ETH', value: 30 },
    { name: 'BTC', value: 20 },
    { name: 'USDC', value: 10 },
  ];
  const COLORS = ['#3b82f6', '#8b5cf6', '#ef4444', '#10b981'];

  return (
    <Card className="overflow-hidden transform transition-all duration-500 hover:scale-105">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4">
        <h3 className="text-2xl font-semibold">Multi-Asset Liquidity Pool</h3>
      </CardHeader>
      <CardContent className="p-4">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-600 mt-2">
          Diversify your liquidity across multiple assets for optimized returns.
        </p>
      </CardContent>
    </Card>
  );
};

const YieldFarmingDashboard = () => {
  const [apr, setApr] = useState(12.5);
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setApr((prevApr) => {
        const newApr = prevApr + (Math.random() - 0.5) * 2;
        setHistoricalData((prevData) => [
          ...prevData.slice(-11),
          { time: new Date().toLocaleTimeString(), apr: newApr },
        ]);
        return newApr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="overflow-hidden transform transition-all duration-500 hover:scale-105">
      <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4">
        <h3 className="text-2xl font-semibold">Yield Farming Dashboard</h3>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold">Current APR:</span>
          <span className="text-2xl font-bold text-green-600">{apr.toFixed(2)}%</span>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-green-500 transition-all duration-500"
            style={{ width: `${Math.min(apr, 20) * 5}%` }}
          ></div>
        </div>
        <ResponsiveContainer width="100%" height={150}>
          <AreaChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="apr" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-600 mt-2">
          Maximize your returns with our dynamic yield farming strategies.
        </p>
      </CardContent>
    </Card>
  );
};

const FeatureTab = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
    <Icon className="w-6 h-6 text-blue-500 mt-1" />
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <button
            className="w-full p-4 text-left bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const LandingPage = () => {
  const [currentPriceRange, setCurrentPriceRange] = useState({ min: 90, max: 110 });
  const [currentPrice, setCurrentPrice] = useState(100);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('security');

  const headerRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (headerRef.current) {
      if (window.scrollY > 0) {
        headerRef.current.classList.add('sticky', 'top-0', 'z-50', 'shadow-md');
      } else {
        headerRef.current.classList.remove('sticky', 'top-0', 'z-50', 'shadow-md');
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrice((prev) => {
        const newPrice = prev + (Math.random() - 0.5) * 5;
        if (newPrice < currentPriceRange.min || newPrice > currentPriceRange.max) {
          setCurrentPriceRange({
            min: Math.max(newPrice - 10, 0),
            max: newPrice + 10,
          });
        }
        return newPrice;
      });
    }, 2000);

    const timer = setTimeout(() => setIsVisible(true), 500);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPriceRange, handleScroll]);

  const faqs = [
    {
      question: "What is BTB Finance?",
      answer: "BTB Finance is a decentralized finance platform that offers automated liquidity management, yield optimization, and multi-asset pooling solutions."
    },
    {
      question: "How does auto-rebalancing work?",
      answer: "Our smart contracts continuously monitor market conditions and automatically adjust your liquidity positions to maximize returns and minimize impermanent loss."
    },
    {
      question: "Is BTB Finance secure?",
      answer: "Yes, we prioritize security with regular audits, multi-sig wallets, and insurance coverage to protect your assets. Our smart contracts are thoroughly tested and have undergone multiple security audits by reputable firms."
    },
    {
      question: "How can I start using BTB Finance?",
      answer: "To get started, you'll need a compatible wallet (e.g., Phantom, backpack) and some cryptocurrency. Visit our 'Get Started' page for a step-by-step guide on connecting your wallet and making your first deposit."
    },
    {
      question: "What cryptocurrencies does BTB Finance support?",
      answer: "We currently support a wide range of cryptocurrencies, including SOL, ETH, BTC, and various stablecoins. Check our 'Supported Assets' page for a complete and up-to-date list."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-purple-50 to-blue-50">
      <header ref={headerRef} className="bg-white transition-all duration-300">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 animate-pulse">
            BTB Finance
          </h1>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" className="hover:animate-bounce">Features</Button>
            <Button variant="ghost" className="hover:animate-bounce">Pricing</Button>
            <Button variant="ghost" className="hover:animate-bounce">About</Button>
            <Button className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white animate-pulse">
              Get Started
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <Button variant="ghost" className="w-full py-2">Features</Button>
            <Button variant="ghost" className="w-full py-2">Pricing</Button>
            <Button variant="ghost" className="w-full py-2">About</Button>
            <Button className="w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white animate-pulse py-2">
              Get Started
            </Button>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">
            <TypewriterEffect text="Revolutionize Your Liquidity Management" speed={100} />
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {isVisible && (
              <TypewriterEffect text="Automate rebalancing, optimize yields, and manage multi-asset liquidity with BTB Finance." />
            )}
          </p>
          <Button size="lg" className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white animate-pulse">
            Start Optimizing <ArrowRight className="ml-2 animate-bounce" />
          </Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden transform transition-all duration-500 hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white p-4">
              <h3 className="text-2xl font-semibold">Live Price Range Management</h3>
            </CardHeader>
            <CardContent className="p-4">
              <div className="mb-4">
                <p className="text-lg font-semibold">Current Price: ${currentPrice.toFixed(2)}</p>
                <p>Range: ${currentPriceRange.min.toFixed(2)} - ${currentPriceRange.max.toFixed(2)}</p>
              </div>
              <AutoRebalanceAnimation currentPrice={currentPrice} priceRange={currentPriceRange} />
              <p className="text-sm text-gray-600 mt-2">
                Watch as the system auto-rebalances when the price moves out of range!
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden transform transition-all duration-500 hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white p-4">
              <h3 className="text-2xl font-semibold">Auto Fee Claim (Solana)</h3>
            </CardHeader>
            <CardContent className="p-4">
              <AutoFeeClaimAnimation />
              <p className="text-sm text-gray-600 mt-2">
                Fees are automatically claimed when they reach 5 SOL!
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <MultiAssetLiquidityPool />
          <YieldFarmingDashboard />
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <AnimatedFeature
            icon={Zap}
            title="Auto-Ranging"
            description="Our smart contracts automatically adjust your liquidity range to maximize returns."
          />
          <AnimatedFeature
            icon={Shield}
            title="Intelligent Stop-Loss"
            description="Protect your investments with dynamic stop-loss features that adapt to market conditions."
          />
          <AnimatedFeature
            icon={BarChart2}
            title="Auto-Claiming"
            description="Automatically claim and reinvest your earnings for compounded growth."
          />
        </section>

        <section className="mb-16">
          <Card>
            <CardHeader className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white p-4">
              <h3 className="text-2xl font-semibold">Advanced Features</h3>
            </CardHeader>
            <CardContent>
              <Tabs>
                <TabsList>
                  <TabsTrigger value="security" active={activeTab === 'security'} onClick={setActiveTab}>
                    Security
                  </TabsTrigger>
                  <TabsTrigger value="mobile" active={activeTab === 'mobile'} onClick={setActiveTab}>
                    Mobile App
                  </TabsTrigger>
                  <TabsTrigger value="analytics" active={activeTab === 'analytics'} onClick={setActiveTab}>
                    Analytics
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="security" activeTab={activeTab}>
                  <FeatureTab
                    icon={Lock}
                    title="Enterprise-Grade Security"
                    description="Your assets are protected by state-of-the-art security measures, including multi-sig wallets and regular audits."
                  />
                </TabsContent>
                <TabsContent value="mobile" activeTab={activeTab}>
                  <FeatureTab
                    icon={Smartphone}
                    title="Mobile App"
                    description="Manage your liquidity on the go with our intuitive mobile app. Set alerts, track performance, and make quick adjustments anytime, anywhere."
                  />
                </TabsContent>
                <TabsContent value="analytics" activeTab={activeTab}>
                  <FeatureTab
                    icon={TrendingUp}
                    title="Advanced Analytics"
                    description="Gain deep insights into your portfolio performance with our advanced analytics tools. Visualize trends, compare strategies, and optimize your returns."
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <FAQ faqs={faqs} />
        </section>

        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">
            <TypewriterEffect text="Ready to Elevate Your Liquidity Strategy?" speed={75} />
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {isVisible && (
              <TypewriterEffect text="Join the future of decentralized finance with BTB Finance's cutting-edge tools." />
            )}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-red-500 text-red-500 hover:bg-red-50 hover:animate-pulse mr-4"
          >
            Explore Features
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white animate-pulse"
          >
            Get Started Now
          </Button>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white py-8">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BTB Finance</h3>
            <p>Empowering your DeFi journey with cutting-edge liquidity management solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">API</a></li>
              <li><a href="#" className="hover:underline">Tutorials</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Discord</a></li>
              <li><a href="#" className="hover:underline">Telegram</a></li>
              <li><a href="#" className="hover:underline">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/20 text-center">
          <p className="animate-pulse">&copy; 2024 BTB Finance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;