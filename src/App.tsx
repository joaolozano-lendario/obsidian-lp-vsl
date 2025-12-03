import { useState, useRef } from 'react'
import { Play, ArrowRight, Check, Shield, Volume2, VolumeX, Pause, Zap, Brain, Users, Clock, Star } from 'lucide-react'

// Variante D: VSL-Centric com IMPACTO MÁXIMO
// Video como protagonista absoluto
// Ângulo: "Obeso Intelectual" - Do consumo à criação
// Assets: Videos reais + Logo Obsidian
// BRANDING: Academia Lendária (monocromático) + toque Obsidian purple

// SVG Components - Academia Lendária Brand Assets
const LogoDiamante = ({ className = "", fill = "#fff" }: { className?: string; fill?: string }) => (
  <svg className={className} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill={fill} d="M247.258 18.749A63.908 63.908 0 0 0 202.029 0h-84.091a63.906 63.906 0 0 0-45.229 18.749L18.748 72.596C6.749 84.596 0 100.961 0 117.944v84.095c0 16.866 6.75 33.232 18.748 45.231l53.978 53.981A63.907 63.907 0 0 0 117.954 320h84.092a63.908 63.908 0 0 0 45.228-18.749l53.978-53.981A63.91 63.91 0 0 0 320 202.039v-84.095a63.913 63.913 0 0 0-18.748-45.231l-53.978-53.98-.016.016Zm3.749 45.964c2 0 3.117.25 3.866.367.867 3.366 1 16-10.865 39.865-5.5 11.116-12.749 22.732-21.248 34.481a410.027 410.027 0 0 0-20.364-21.865c-7.25-7.25-14.499-14-21.865-20.366 7.616-5.5 15.249-10.5 22.731-14.866 27.231-15.866 42.479-17.499 47.729-17.499v-.117h.016Zm-44.362 95.212c-6.999 8.25-14.498 16.366-22.364 24.365-7.999 8-16.115 15.5-24.364 22.366-8.249-7-16.365-14.366-24.364-22.366-8-7.999-15.499-16.115-22.365-24.365 6.999-8.25 14.499-16.366 22.365-24.365 7.865-8 16.115-15.5 24.364-22.366 8.249 7 16.365 14.366 24.364 22.366 7.999 7.999 15.498 16.115 22.364 24.365ZM90.707 36.865c7.25-7.25 16.865-11.25 27.114-11.25h84.091c10.249 0 19.865 4 27.114 11.25l4.616 4.616c-20.997 5.117-46.978 18.866-73.842 39.115-26.864-20.25-52.844-33.865-73.842-39.115l4.616-4.616h.133ZM65.093 65.097c.617-.117 1.867-.367 3.867-.367 15.865 0 38.612 12.25 47.728 17.5 7.499 4.365 15.115 9.365 22.731 14.865-7.366 6.366-14.615 13.116-21.865 20.366a410.071 410.071 0 0 0-20.364 21.865c-8.5-11.749-15.748-23.365-21.248-34.481C64.077 80.979 64.193 68.363 65.077 64.98v.117h.016Zm-28.23 164.058c-7.25-7.25-11.249-16.866-11.249-27.116v-84.095c0-10.25 4-19.866 11.249-27.115l4.616-4.617c5.116 20.999 18.865 46.981 38.98 73.846-20.249 26.866-33.864 52.848-38.98 73.847l-4.616-4.617v-.133Zm31.98 25.982c-2 0-3.117-.25-3.866-.367-.867-3.366-1-15.999 10.865-39.865 5.5-11.116 12.749-22.732 21.248-34.481a410.071 410.071 0 0 0 20.364 21.865c7.25 7.25 14.499 14 21.865 20.366-7.616 5.5-15.249 10.5-22.731 14.866-27.23 15.866-42.48 17.499-47.728 17.499v.117h-.017Zm160.3 27.865c-7.249 7.25-16.865 11.249-27.114 11.249h-84.091c-10.249 0-19.865-3.999-27.114-11.249l-4.616-4.617c20.997-5.116 46.978-18.865 73.842-39.114 26.864 20.249 52.845 33.865 73.842 39.114l-4.616 4.617h-.133Zm25.614-28.232c-.617.117-1.867.367-3.866.367-15.865 0-38.613-12.25-47.729-17.499-7.499-4.367-15.115-9.367-22.731-14.866a410.464 410.464 0 0 0 21.865-20.366 410.027 410.027 0 0 0 20.364-21.865c8.499 11.749 15.748 23.365 21.248 34.481 11.865 23.866 11.749 36.482 10.865 39.865v-.117h-.016Zm39.479-52.864c0 10.25-4 19.866-11.249 27.115l-4.616 4.617c-5.116-20.999-18.865-46.981-38.979-73.846 20.248-26.866 33.863-52.848 38.979-73.847l4.616 4.617c7.249 7.25 11.249 16.866 11.249 27.115v84.229Z"/>
  </svg>
)

const LogoInfinito = ({ className = "", fill = "#fff" }: { className?: string; fill?: string }) => (
  <svg className={className} viewBox="0 0 400 184" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M393.3 57.2C388.7 45.8 381.9 35.6 373.2 26.9C364.4 18.2 354.2 11.4 342.9 6.8C331.8 2.3 320.2 0 308.3 0C296.4 0 284.8 2.3 273.8 6.7C262.4 11.3 252.2 18.1 243.5 26.8L200 70.3L156.5 26.8C147.7 18.1 137.5 11.3 126.2 6.7C115.2 2.3 103.6 0 91.7 0C79.8 0 68.2 2.3 57.2 6.7C45.8 11.3 35.6 18.1 26.9 26.8C18.2 35.6 11.4 45.8 6.8 57.1C2.3 68.2 0 79.8 0 91.7C0 103.6 2.3 115.2 6.7 126.2C11.3 137.6 18.1 147.8 26.8 156.5C35.5 165.2 45.8 172 57.1 176.6C68.1 181.1 79.7 183.3 91.6 183.3C103.5 183.3 115.1 181 126.1 176.6C137.5 172 147.7 165.2 156.4 156.5L199.9 113L210.4 123.5L243.4 156.5C252.2 165.2 262.4 172 273.7 176.6C284.7 181.1 296.3 183.3 308.2 183.3C320.1 183.3 331.7 181 342.7 176.6C354.1 172 364.3 165.2 373 156.5C381.7 147.7 388.5 137.5 393.1 126.2C397.6 115.2 399.8 103.6 399.8 91.7C399.8 79.8 397.5 68.2 393.1 57.2H393.3ZM369.7 91.7C369.7 108.1 363.3 123.6 351.7 135.2C340.1 146.8 324.7 153.2 308.2 153.2C291.7 153.2 276.3 146.8 264.7 135.2L221.2 91.7L264.7 48.2C276.3 36.6 291.7 30.2 308.2 30.2C324.7 30.2 340.1 36.6 351.7 48.2C363.3 59.8 369.7 75.2 369.7 91.7ZM178.6 91.7L135.1 135.2C123.5 146.8 108.1 153.2 91.6 153.2C75.2 153.2 59.7 146.8 48.1 135.2C36.5 123.6 30.1 108.2 30.1 91.7C30.1 75.2 36.5 59.8 48.1 48.2C59.7 36.6 75.1 30.2 91.6 30.2C108 30.2 123.5 36.6 135.1 48.2L178.5 91.6V91.7H178.6Z" fill={fill}/>
  </svg>
)

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* =========================================
          HERO: VIDEO AS THE PROTAGONIST
          ========================================= */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-6 md:py-12 relative">
        {/* Header com logo */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <LogoDiamante className="w-8 h-8" fill="#fff" />
            <span className="font-display text-sm text-white/70">Academia Lendár[IA]</span>
          </div>
        </div>

        {/* Purple ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-obsidian-600/15 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl w-full mx-auto relative z-10">
          {/* Pre-video hook - DEDO NA FERIDA */}
          <div className="text-center mb-6 md:mb-8">
            <div className="space-y-2 mb-8">
              <p className="font-display text-lg md:text-2xl text-gray-400">
                Quantos projetos você começou esse ano?
              </p>
              <p className="font-display text-lg md:text-2xl text-gray-500">
                Quantos você terminou?
              </p>
              <p className="font-display text-lg md:text-2xl text-gray-600">
                Qual foi a última coisa que você aprendeu?
              </p>
              <p className="font-display text-lg md:text-2xl text-white">
                Consegue lembrar <span className="text-obsidian-400 font-semibold">agora</span>?
              </p>
            </div>
            {/* Product naming */}
            <p className="font-mono text-xs text-obsidian-400 uppercase tracking-[0.2em] mb-4">
              Segundo Cérebro com IA
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Você não precisa aprender mais.
              <br />
              <span className="text-obsidian-400">Precisa acessar o que já sabe.</span>
            </h1>
          </div>

          {/* Video Container - THE HERO */}
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-obsidian-600/20 border border-white/10">
            {/* Video element */}
            <video
              ref={videoRef}
              className="w-full aspect-video bg-black"
              poster="/obsidian-logo.png"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/canvas-hero.mp4" type="video/mp4" />
            </video>

            {/* Play overlay (when not playing) */}
            {!isPlaying && (
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center cursor-pointer group"
                onClick={handlePlayPause}
              >
                {/* Central play button */}
                <button className="w-20 h-20 md:w-24 md:h-24 bg-obsidian-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_50px_rgba(124,58,237,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(124,58,237,0.7)]">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                </button>

                {/* Duration badge */}
                <p className="mt-4 font-mono text-sm text-white/80 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  2 min — Veja como funciona
                </p>
              </div>
            )}

            {/* Video controls (when playing) */}
            {isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePlayPause}
                    className="text-white hover:text-obsidian-400 transition-colors"
                  >
                    <Pause className="w-6 h-6" />
                  </button>

                  <button
                    onClick={handleMute}
                    className="text-white hover:text-obsidian-400 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Below video CTA */}
          <div className="mt-6 md:mt-8 text-center">
            <p className="font-body text-sm md:text-base text-gray-500">
              Assista e descubra por que <span className="text-white">consumir mais está te deixando mais burro</span>.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: O ESPELHO - OBESO INTELECTUAL
          ========================================= */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs text-obsidian-400 uppercase tracking-[0.3em] mb-6 md:mb-8 text-center">
            O Diagnóstico
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white text-center leading-tight mb-8 md:mb-12">
            Você é um{' '}
            <span className="text-obsidian-400">obeso intelectual</span>?
          </h2>

          <div className="space-y-4 md:space-y-6">
            {[
              {
                question: 'Você já leu 50 livros este ano.',
                followup: 'Quantos você consegue resumir agora?',
              },
              {
                question: 'Você salvou 200 links "pra ver depois".',
                followup: 'Quantos você viu?',
              },
              {
                question: 'Você fez dezenas de cursos.',
                followup: 'Quantos você aplicou de verdade?',
              },
              {
                question: 'Você tem 47 abas abertas agora mesmo.',
                followup: 'Cada uma é uma decisão que você não tomou.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-5 md:p-6 bg-white/5 rounded-xl border border-white/10 hover:border-obsidian-600/50 transition-colors"
              >
                <p className="font-display text-lg md:text-xl text-white font-medium">
                  {item.question}
                </p>
                <p className="font-body text-gray-400 mt-2 text-sm md:text-base">
                  {item.followup}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <p className="font-display text-2xl md:text-4xl text-white font-bold leading-tight">
              Consumir sem sistema é
              <br />
              <span className="text-obsidian-400">engordar sem nutrir.</span>
            </p>
            <p className="font-body text-base md:text-lg text-gray-400 mt-4 md:mt-6 max-w-xl mx-auto">
              Você não é mais inteligente pelo que consumiu.
              <br />
              É pelo que consegue <span className="text-white font-medium">usar</span>.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: A TRANSFORMAÇÃO
          ========================================= */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-transparent via-obsidian-950/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-mono text-xs text-obsidian-400 uppercase tracking-[0.3em] mb-4">
              A Solução
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
              Você não precisa aprender mais.
              <br />
              <span className="text-obsidian-400">Precisa acessar o que já sabe.</span>
            </h2>
            <p className="font-display text-xl md:text-2xl text-gray-400 mt-4">
              Uma IA treinada em <span className="text-white font-semibold">você</span>.
            </p>
          </div>

          {/* Video demonstration */}
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 mb-12 md:mb-16">
            <video
              className="w-full aspect-video bg-black"
              controls
              poster="/obsidian-logo.png"
              playsInline
            >
              <source src="/graficos-obsidian.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="p-5 md:p-6 bg-white/5 rounded-xl border border-white/10">
              <Zap className="w-8 h-8 text-obsidian-400 mb-4" />
              <h3 className="font-display text-lg font-semibold text-white">Dobre sua produtividade</h3>
              <p className="font-body text-gray-400 mt-2 text-sm">
                Abra seu Segundo Cérebro e não saia mais dele. Consulte desde sua agenda até projetos ambiciosos.
              </p>
            </div>

            <div className="p-5 md:p-6 bg-white/5 rounded-xl border border-white/10">
              <Brain className="w-8 h-8 text-obsidian-400 mb-4" />
              <h3 className="font-display text-lg font-semibold text-white">Clone seu cérebro</h3>
              <p className="font-body text-gray-400 mt-2 text-sm">
                Com IA integrada, seu Segundo Cérebro se torna uma versão sua melhorada. Um Segundo Cérebro real.
              </p>
            </div>

            <div className="p-5 md:p-6 bg-white/5 rounded-xl border border-white/10">
              <Users className="w-8 h-8 text-obsidian-400 mb-4" />
              <h3 className="font-display text-lg font-semibold text-white">Cérebros Lendários</h3>
              <p className="font-body text-gray-400 mt-2 text-sm">
                Faça download de como mentes brilhantes pensam, organizam e têm novas ideias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: PROVA SOCIAL
          ========================================= */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs text-gray-500 uppercase tracking-[0.3em] mb-6 md:mb-8">
            A Origem
          </p>

          <blockquote className="font-display text-2xl md:text-4xl text-white font-light leading-relaxed">
            "Eu era um obeso intelectual.
            <br />
            Consumia tudo. Criava nada.
            <br />
            <span className="text-obsidian-400 font-semibold">Até descobrir o Segundo Cérebro.</span>"
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-obsidian-600 flex items-center justify-center">
              <span className="font-display text-lg font-bold text-white">AN</span>
            </div>
            <div className="text-left">
              <p className="font-display text-white font-semibold text-lg">Alan Nicolas</p>
              <p className="font-body text-sm text-gray-500">
                Fundador da Academia Lendária
                <br />
                10 anos de notas. Agora, todas conectadas.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-mono text-sm">15.000+ alunos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-sm">2 anos de acesso</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: A OFERTA
          ========================================= */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-transparent to-obsidian-950/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <p className="font-mono text-xs text-obsidian-400 uppercase tracking-[0.3em] mb-4">
              Seu Segundo Cérebro
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              15 minutos de setup.
              <br />
              <span className="text-obsidian-400">Anos de clareza.</span>
            </h2>
            <p className="font-body text-lg md:text-xl text-gray-400 mt-4">
              Não é curso de ferramenta. É sistema de pensamento.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Left: Value Stack */}
            <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
              <p className="font-display text-lg font-semibold text-white mb-6">
                O que você recebe:
              </p>

              <ul className="space-y-4">
                {[
                  { item: 'Clareza mental em 7 dias', value: 'R$ 2.400', desc: 'Acesse qualquer ideia em segundos' },
                  { item: 'Setup em 15 minutos', value: 'R$ 497', desc: 'Saia funcionando na primeira aula' },
                  { item: 'Sistema de 10+ anos', value: 'R$ 397', desc: 'Não envelhece como apps da moda' },
                  { item: 'Vault pronto', value: 'R$ 497', desc: 'Copie, cole, comece' },
                  { item: 'Cérebros Lendários', value: 'R$ 997', highlight: true, desc: 'Como experts pensam e organizam' },
                  { item: 'Suporte até funcionar', value: 'R$ 297', desc: 'Não te largamos' },
                ].map((item, index) => (
                  <li key={index} className="flex items-start justify-between gap-4 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.highlight ? 'text-obsidian-400' : 'text-emerald-400'}`} />
                      <div>
                        <span className={`font-body ${item.highlight ? 'text-obsidian-300 font-medium' : 'text-gray-300'}`}>
                          {item.item}
                        </span>
                        {item.desc && (
                          <p className="font-body text-xs text-gray-500 mt-0.5">{item.desc}</p>
                        )}
                      </div>
                    </div>
                    <span className="font-mono text-sm text-gray-500 line-through whitespace-nowrap">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-body text-gray-400">Valor Total:</span>
                <span className="font-mono text-lg text-gray-500 line-through">R$ 5.385</span>
              </div>
            </div>

            {/* Right: Price & CTA */}
            <div className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-obsidian-900/50 to-obsidian-950/50 rounded-2xl p-6 md:p-8 border border-obsidian-600/30">
              <p className="font-body text-gray-400 mb-2">
                Seu investimento hoje:
              </p>

              <p className="font-display text-6xl md:text-8xl font-bold text-white">
                R$ 288
              </p>

              <p className="font-body text-gray-400 mt-2">
                ou 12x de R$ 28,06
              </p>

              <p className="font-mono text-sm text-obsidian-400 mt-4 px-4 py-2 bg-obsidian-600/20 rounded-full">
                94% de desconto
              </p>

              <button className="mt-8 w-full bg-obsidian-600 hover:bg-obsidian-500 text-white font-display font-semibold text-lg px-8 py-5 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-obsidian-600/30 hover:shadow-xl hover:shadow-obsidian-600/40 hover:-translate-y-0.5">
                Quero Meu Segundo Cérebro
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Guarantee */}
              <div className="mt-6 flex items-center gap-2 text-gray-400">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="font-body text-sm">
                  7 dias de garantia incondicional
                </span>
              </div>

              <p className="font-body text-xs text-gray-500 mt-4 max-w-xs">
                Se não funcionar para você, devolvo cada centavo. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: OBJEÇÃO CRUSHER
          ========================================= */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="p-6 md:p-8 bg-white/5 rounded-2xl border border-white/10">
            <p className="font-display text-xl md:text-2xl text-white text-center mb-6">
              "E se eu não tiver tempo?"
            </p>

            <p className="font-body text-gray-400 text-center leading-relaxed">
              Você já está consumindo conteúdo todo dia.
              <br /><br />
              Este curso não pede tempo extra.
              <br />
              Ele <span className="text-white font-medium">transforma o tempo que você já gasta consumindo</span> em tempo criando.
              <br /><br />
              <span className="text-obsidian-400 font-semibold">Mesmo input. 10x output.</span>
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 7: FINAL CTA
          ========================================= */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-3xl md:text-4xl text-white font-bold leading-tight">
            O que está realmente em risco?
          </p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10">
            <div className="p-5 md:p-6 bg-white/5 rounded-xl border border-white/10">
              <p className="font-body text-sm text-gray-400 mb-2">Se você comprar e não usar:</p>
              <p className="font-display text-xl text-white">Perde R$ 288</p>
            </div>
            <div className="p-5 md:p-6 bg-obsidian-900/30 rounded-xl border border-obsidian-600/30">
              <p className="font-body text-sm text-gray-400 mb-2">Se continuar engordando intelectualmente:</p>
              <p className="font-display text-xl text-obsidian-300">Perde anos de potencial</p>
            </div>
          </div>

          <button className="mt-10 md:mt-12 bg-obsidian-600 hover:bg-obsidian-500 text-white font-display font-semibold text-lg md:text-xl px-10 md:px-16 py-5 md:py-6 rounded-xl transition-all duration-200 inline-flex items-center gap-3 shadow-lg shadow-obsidian-600/30 hover:shadow-xl hover:shadow-obsidian-600/40">
            Quero Meu Segundo Cérebro
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <p className="font-body text-sm text-gray-500 mt-6">
            Acesso imediato • 7 dias de garantia • Suporte especializado
          </p>
        </div>
      </section>

      {/* =========================================
          FOOTER
          ========================================= */}
      <footer className="py-12 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          {/* Logo Infinito - Assinatura */}
          <LogoInfinito className="w-24 h-auto" fill="#fff" />

          <div className="flex items-center gap-6 text-sm font-body text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Suporte</a>
          </div>

          <p className="font-body text-xs text-gray-600">
            © 2024 Academia Lendár[IA] • Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  )
}
