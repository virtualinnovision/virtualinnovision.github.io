/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Eye, 
  Globe, 
  Zap, 
  Layers, 
  Video, 
  BarChart3, 
  Cpu, 
  ArrowRight, 
  Instagram, 
  MessageCircle 
} from "lucide-react";
import { useRef } from "react";

export default function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-blue/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="Virtual Innovision Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback caso a imagem não exista ainda
              e.currentTarget.src = "https://picsum.photos/seed/tech/64/64";
            }}
          />
          <span className="font-display font-bold tracking-tighter text-xl">VIRTUAL INNOVISION</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-silver/70">
          <a href="#sobre" className="hover:text-neon-blue transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-neon-blue transition-colors">Serviços</a>
          <a href="#tecnologia" className="hover:text-neon-blue transition-colors">Tecnologia</a>
        </div>
        <a 
          href="https://wa.me/556376041043" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-neon-blue transition-all duration-300"
        >
          Contato
        </a>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div 
          style={{ opacity, scale }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-[10px] uppercase tracking-[0.2em] mb-6">
            <Zap size={12} /> Sua marca atravessando novas fronteiras
          </div>
          <h1 className="font-display text-6xl md:text-9xl font-bold tracking-tighter mb-4 leading-none">
            VIRTUAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-silver">INNOVISION</span>
          </h1>
          <p className="text-silver/60 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            A Virtual Innovision não faz apenas marketing. Nós construímos a inteligência de dados e a infraestrutura tecnológica necessária para que sua marca atravesse novas fronteiras com previsibilidade e escala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/556376041043"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-neon-blue text-black font-bold uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Orçamento <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>

        {/* Circuit Lines Decoration */}
        <div className="absolute top-1/4 left-0 w-1/4 h-px bg-gradient-to-r from-transparent to-neon-blue/40" />
        <div className="absolute top-1/4 left-1/4 w-px h-12 bg-neon-blue/40" />
        
        <div className="absolute bottom-1/4 right-0 w-1/4 h-px bg-gradient-to-l from-transparent to-neon-blue/40" />
        <div className="absolute bottom-1/4 right-1/4 w-px h-12 bg-neon-blue/40" />

        <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-neon-blue/50 to-transparent" />
      </section>

      {/* About Us Section */}
      <section id="sobre" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 border-neon-blue/30" />
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
              alt="Global Network" 
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 right-6 bg-black p-6 border border-neon-blue/20">
              <div className="text-4xl font-display font-bold text-neon-blue">360º</div>
              <div className="text-xs text-silver uppercase tracking-widest">Visão Estratégica</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold text-neon-blue uppercase tracking-[0.3em] mb-4">Sobre Nós</h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium mb-6 leading-tight">
              Inteligência de dados <br /> para escala real.
            </h3>
            <p className="text-silver/70 leading-relaxed mb-6">
              A Virtual Innovision transcende o marketing convencional. Somos especialistas em ecossistemas digitais, focados em construir o alicerce tecnológico que permite empresas escalarem com segurança e previsibilidade.
            </p>
            <p className="text-silver/70 leading-relaxed">
              Nossa abordagem une inteligência de dados, rastreamento avançado e automação de ponta para garantir que cada investimento seja transformado em resultado mensurável.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 px-6 bg-anthracite/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-neon-blue uppercase tracking-[0.3em] mb-4">Catálogo de Serviços</h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium">Soluções de Ecossistema Digital</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Cpu className="text-neon-blue" />,
                title: "1. Infraestrutura & Rastreamento Avançado",
                items: [
                  { label: "Sistemas de Monitoramento", desc: "Implementação de protocolos de rastreamento de última geração (Server-side) para máxima precisão de dados." },
                  { label: "Conformidade & Conversão", desc: "Configuração avançada de sinais de consentimento e APIs de conversão para evitar perda de dados por bloqueadores." },
                  { label: "Auditoria Técnica", desc: "Identificação e correção de falhas em funis de vendas e páginas de destino." }
                ]
              },
              {
                icon: <BarChart3 className="text-neon-blue" />,
                title: "2. Performance & Growth (Tráfego Pago)",
                items: [
                  { label: "Gestão Estratégica", desc: "Campanhas de alta performance em redes de busca e display." },
                  { label: "Escala Data-Driven", desc: "Otimização contínua de investimentos baseada em métricas reais de retorno (ROI)." },
                  { label: "Remarketing Inteligente", desc: "Recuperação de audiência qualificada através de segmentação comportamental." }
                ]
              },
              {
                icon: <Globe className="text-neon-blue" />,
                title: "3. Desenvolvimento & Ecossistema Web",
                items: [
                  { label: "Páginas de Alta Velocidade", desc: "Desenvolvimento de interfaces ultra-rápidas focadas em taxas de conversão superiores." },
                  { label: "Arquitetura Segura", desc: "Hospedagem em infraestrutura de alta disponibilidade e proteção contra ameaças." },
                  { label: "SEO Estrutural", desc: "Otimização de código para máxima visibilidade em mecanismos de busca." }
                ]
              },
              {
                icon: <Zap className="text-neon-blue" />,
                title: "4. Produção Audiovisual com IA",
                items: [
                  { label: "Criativos Dinâmicos", desc: "Geração de vídeos publicitários de alto impacto com tecnologias generativas de ponta." },
                  { label: "Sintese de Voz Profissional", desc: "Locuções naturais e personalizadas para narração de anúncios e vídeos institucionais." },
                  { label: "Identidade Visual 360º", desc: "Branding completo com estética minimalista e tecnológica." }
                ]
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 group"
              >
                <div className="mb-6 p-3 w-fit bg-white/5 rounded-sm group-hover:bg-neon-blue/10 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-display font-bold mb-6">{service.title}</h4>
                <div className="space-y-6">
                  {service.items.map((item, i) => (
                    <div key={i} className="border-l border-neon-blue/20 pl-4">
                      <h5 className="text-sm font-bold text-neon-blue mb-1 uppercase tracking-wider">{item.label}</h5>
                      <p className="text-silver/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold text-neon-blue uppercase tracking-[0.3em] mb-4">Diferencial</h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium mb-8">Infraestrutura & Previsibilidade</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><Cpu className="text-neon-blue" size={20} /></div>
                <div>
                  <h5 className="font-bold mb-1">Rastreamento Server-Side</h5>
                  <p className="text-silver/60 text-sm">Precisão absoluta ignorando bloqueadores de anúncios e limitações de navegadores.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><Zap className="text-neon-blue" size={20} /></div>
                <div>
                  <h5 className="font-bold mb-1">Escala com IA</h5>
                  <p className="text-silver/60 text-sm">Automação inteligente para criativos e gestão de lances em tempo real.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 md:w-96 md:h-96 border border-neon-blue/20 rounded-full flex items-center justify-center"
            >
              <div className="w-[80%] h-[80%] border border-neon-blue/10 rounded-full flex items-center justify-center">
                <div className="w-[60%] h-[60%] border border-neon-blue/5 rounded-full" />
              </div>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Eye size={80} className="text-neon-blue neon-glow animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Virtual Innovision Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/tech/64/64";
                }}
              />
              <span className="font-display font-bold tracking-tighter text-lg">VIRTUAL INNOVISION</span>
            </div>
            <p className="text-silver/40 text-[10px] uppercase tracking-widest mt-2">
              © 2026 Virtual Innovision. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/virtualinnovision" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-neon-blue hover:text-black transition-all rounded-full"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://wa.me/556376041043" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-neon-blue text-black hover:bg-white transition-all rounded-full"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/556376041043" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-neon-blue text-black rounded-full shadow-lg neon-border hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
