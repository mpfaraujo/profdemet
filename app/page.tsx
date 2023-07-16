import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Página com informações úteis <br className="hidden sm:inline" />
          sobre os professores lotados no DEMET.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Apenas uma página onde se pode buscar informações sobre os professores lotados no DEMET do <span className="font-extrabold">CEFET-RJ  </span>unidade Maracanã.
        </p>
      </div>
    </section>
  )
}

