import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "~/lib/get-dictionary";
import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

import type { Locale } from "~/config/i18n-config";

export default async function ImagePromptLandingPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  const tools = [
    {
      title: "Image to Prompt",
      description: "Transform your image into detailed image prompt with Image to Prompt, enhancing your creative process and optimizing AI-driven design efficiency.",
      icon: "🖼️",
      link: "/tools/image-to-prompt",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Image Prompt Generator",
      description: "Enhance your AI image generation with our Image Prompt Generator. Turn your idea into detailed, AI-optimized prompts.",
      icon: "✨",
      link: "/tools/prompt-generator",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Image Generator",
      description: "Use Image Prompt to effortlessly generate stunning images, enhancing creativity and streamlining your design process with AI-powered precision.",
      icon: "🎨",
      link: "/tools/ai-image-generator",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Describe Image",
      link: "/tools/describe-image",
      icon: "🔍",
      description: "Let AI help you understand any image - get detailed descriptions, recognize objects, or ask your own questions.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      title: "Free Core Features",
      description: "All text-to-prompt tools are completely free with daily usage limits.",
      icon: "💎"
    },
    {
      title: "Privacy First",
      description: "All images are processed in real-time and immediately deleted afterward.",
      icon: "🔒"
    },
    {
      title: "Multi-Language Support",
      description: "Works with prompts in any language, breaking language barriers.",
      icon: "🌐"
    },
    {
      title: "Daily Credits",
      description: "Free users get 2 complimentary credits for image generation daily.",
      icon: "🎁"
    }
  ];

  const faqs = [
    {
      question: "What is an Image Prompt?",
      answer: "An Image Prompt is a set of instructions given to an AI to create a picture. It tells the AI what kind of image you want, like describing a scene or object."
    },
    {
      question: "How do Image Prompts work?",
      answer: "Image prompts serve as instructions that define content, style, and details. They influence the AI's understanding and help translate your vision into visual form."
    },
    {
      question: "Are there usage limits?",
      answer: "Free users get 5 daily uses of image-to-text tools and 2 complimentary credits for image generation. Premium plans offer unlimited usage."
    },
    {
      question: "Is my data secure?",
      answer: "Yes! We take privacy seriously. Images are processed in real-time and never stored on our servers. Your data security is our top priority."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Turn Your Ideas Into
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Perfect AI Art</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI Powered Image Prompt Tools - A complete suite of AI tools covering every aspect of your image creation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full font-semibold">
                Get Started Free
                <Icons.ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Tools Suite</h2>
            <p className="text-gray-400 text-lg">Everything you need for AI image creation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <Link key={index} href={tool.link} className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{tool.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{tool.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-gray-400 text-lg">Built for creators, by creators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Find answers to common questions</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Creating?</h2>
            <p className="text-xl text-purple-100 mb-8">Join thousands of creators using our AI tools</p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold">
              Start Creating Now
              <Icons.ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white font-bold text-xl mb-4 md:mb-0">ImagePrompt</div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">Terms</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8">
            © 2024 ImagePrompt. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
