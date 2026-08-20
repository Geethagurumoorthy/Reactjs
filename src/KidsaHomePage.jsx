import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Chip,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Menu as MenuIcon,
  CheckCircle as CheckCircleIcon,
  School as SchoolIcon,
  ChildCare as ChildCareIcon,
  AutoAwesome as AutoAwesomeIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

export default function KidsaHomepage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ['Home', 'About Us', 'Programs', 'Events', 'Teachers', 'Contact'];

  const features = [
    {
      icon: <ChildCareIcon className="w-10 h-10 text-orange-500" />,
      title: 'Active Learning',
      description: 'Engaging activities designed to foster creativity, curiosity, and critical thinking.',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      icon: <SchoolIcon className="w-10 h-10 text-blue-500" />,
      title: 'Expert Teachers',
      description: 'Certified early childhood educators focused on personalized care and growth.',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: <AutoAwesomeIcon className="w-10 h-10 text-emerald-500" />,
      title: 'Safe Environment',
      description: 'State-of-the-art facilities designed for security, cleanliness, and playful exploration.',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
  ];

  const programs = [
    {
      id: 1,
      title: 'Infant Care Program',
      age: '1 - 2 Years',
      price: '$180 / Mo',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80',
      teacher: 'Sarah Jenkins',
      teacherRole: 'Nursery Lead',
    },
    {
      id: 2,
      title: 'Preschool Learning',
      age: '2 - 3.5 Years',
      price: '$220 / Mo',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80',
      teacher: 'Michael Chang',
      teacherRole: 'Preschool Teacher',
    },
    {
      id: 3,
      title: 'Kindergarten Prep',
      age: '4 - 5 Years',
      price: '$250 / Mo',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      teacher: 'Emily Davis',
      teacherRole: 'Early Ed Specialist',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-orange-500 text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1">
              <LocationIcon fontSize="small" /> 6391 Elgin St. Celina, USA
            </span>
            <span className="flex items-center gap-1">
              <EmailIcon fontSize="small" /> info@kidsa-school.com
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="mr-2">Follow Us:</span>
            <IconButton size="small" color="inherit">
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" color="inherit">
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" color="inherit">
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" color="inherit">
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION HEADER */}
      <AppBar position="sticky" color="default" elevation={1} className="bg-white">
        <div className="max-w-7xl mx-auto w-full px-4">
          <Toolbar className="justify-between px-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
                K
              </div>
              <span className="text-2xl font-extrabold text-slate-800 tracking-wide">
                KID<span className="text-orange-500">SA</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 font-semibold">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-slate-700 hover:text-orange-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Header Right Action */}
            <div className="hidden md:block">
              <Button
                variant="contained"
                className="bg-orange-500 hover:bg-orange-600 capitalize rounded-full px-6 py-2 text-white font-bold shadow-md"
                endIcon={<ArrowForwardIcon />}
              >
                Enroll Today
              </Button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <IconButton onClick={() => setMobileOpen(true)}>
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </div>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <div className="w-64 p-4">
          <List>
            {navItems.map((item) => (
              <ListItem button key={item} onClick={() => setMobileOpen(false)}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <div className="mt-4">
            <Button variant="contained" color="warning" fullWidth className="rounded-full">
              Enroll Today
            </Button>
          </div>
        </div>
      </Drawer>

      {/* 3. HERO BANNER SECTION */}
      <section className="relative bg-gradient-to-r from-orange-100 via-amber-50 to-blue-50 py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <Chip
              label="Welcome to Kidsa Kindergarten"
              color="warning"
              className="font-bold uppercase tracking-wider bg-orange-200 text-orange-800"
            />
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              A Bright Future Starts With <span className="text-orange-500 underline decoration-wavy">Joyful</span> Learning
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              We empower early learners through creative play, supportive educators, and an inspiring environment designed to nurture curiosity and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                variant="contained"
                size="large"
                className="bg-orange-500 hover:bg-orange-600 rounded-full px-8 py-3 text-lg capitalize font-bold shadow-lg"
              >
                Explore Programs
              </Button>
              <Button
                variant="outlined"
                color="warning"
                size="large"
                className="rounded-full px-8 py-3 text-lg capitalize font-bold border-2"
                startIcon={<PhoneIcon />}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex justify-center">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
                alt="Happy Kindergarten Kids"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Floating Badges */}
            <div className="absolute top-4 left-4 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 z-20 border border-slate-100">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                <CheckCircleIcon />
              </div>
              <div>
                <p className="font-bold text-slate-800">100% Safe</p>
                <p className="text-xs text-slate-500">Certified Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES SECTION */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border ${feature.bgColor} ${feature.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ABOUT US SECTION */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
              alt="Teacher with children"
              className="rounded-3xl shadow-lg w-full object-cover h-[400px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-3xl font-black">15+</p>
              <p className="text-sm font-medium">Years of Experience</p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">About Our School</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              We Provide the Best Education & Environment for Your Children
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our holistic curriculum combines interactive play with structured foundation learning, ensuring every child develops physically, socially, and intellectually.
            </p>

            <ul className="space-y-3">
              {['Individualized learning approach', 'Interactive STEM & creative arts programs', 'Nutritious meals and outdoor play spaces'].map(
                (text, index) => (
                  <li key={index} className="flex items-center space-x-3 text-slate-700 font-semibold">
                    <CheckCircleIcon className="text-emerald-500" />
                    <span>{text}</span>
                  </li>
                )
              )}
            </ul>

            <Button
              variant="contained"
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-3 capitalize font-bold"
            >
              Read More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROGRAMS */}
      <section className="py-16 bg-slate-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Our Programs</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Specialized Learning Tracks</h2>
            <p className="text-slate-600 mt-2">Tailored learning environments for every stage of your child’s development.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="rounded-3xl overflow-hidden shadow-lg border-none hover:shadow-2xl transition-shadow">
                <div className="relative">
                  <CardMedia component="img" height="200" image={program.image} alt={program.title} className="h-52 object-cover" />
                  <Chip
                    label={program.price}
                    color="warning"
                    className="absolute top-4 right-4 font-bold bg-orange-500 text-white"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-1">
                    Age Group: {program.age}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                  <div className="pt-4 border-t border-slate-100 flex items-center space-x-3">
                    <Avatar className="bg-orange-100 text-orange-600">{program.teacher[0]}</Avatar>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{program.teacher}</p>
                      <p className="text-xs text-slate-500">{program.teacherRole}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER SECTION */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <span className="text-xl font-extrabold text-white">KIDSA</span>
            </div>
            <p className="text-sm text-slate-400">
              Building strong foundations for lifelong learning, discovery, and creative growth.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-orange-400 transition-colors">Our Programs</a></li>
              <li><a href="#teachers" className="hover:text-orange-400 transition-colors">Meet Teachers</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2"><LocationIcon fontSize="small" /> 6391 Elgin St. Celina, USA</li>
              <li className="flex items-center gap-2"><PhoneIcon fontSize="small" /> +1 (100) 234-5909</li>
              <li className="flex items-center gap-2"><EmailIcon fontSize="small" /> info@kidsa-school.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-3">Subscribe for upcoming admissions and event updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-slate-800 text-white border border-slate-700 rounded-l-md focus:outline-none text-sm"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md font-bold text-sm transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Kidsa Kindergarten. Designed with React, Tailwind CSS, and MUI.
        </div>
      </footer>
    </div>
  );
}