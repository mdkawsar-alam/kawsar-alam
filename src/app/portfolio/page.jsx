import EnhancedPortfolio from '@/components/ui/Portfolio/EnhancedPortfolio/EnhancedPortfolio';
import Container from '@/components/sheard/Contatiner/Container';

export default function Portfolio() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Container>
        <div className="py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              My <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my best work, featuring web applications, mobile apps, and creative projects that demonstrate my skills and passion for development.
            </p>
          </div>
          <EnhancedPortfolio />
        </div>
      </Container>
    </div>
  );
}
