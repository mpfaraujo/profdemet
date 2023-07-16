import {CadastroProfessor} from "@/components/CadastraProfessor"

const Cadastro = () =>{
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Cadastro de professores DEMET/CEFET Un. Maracanã
          </h1>
          <CadastroProfessor />
        </div>
      </section>

    )
}

export default Cadastro