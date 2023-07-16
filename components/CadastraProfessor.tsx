'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import type { Professor } from "@/types/formTypes"

type formDataProps =Omit <Professor, "id">

const CadastroProfessor = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          id:"",
          nome: "",
          siape: "",
          celular: "",
          email: "",
          coord: "",
          turmas: "",
        }
      })
    const router = useRouter()
    const onSubmit = async (data:formDataProps)=>{
        try{
            const response = await fetch('https://www.mpfaraujo.com.br/api/professores.php',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }) 
            if (response.ok) {alert("Professor cadastrado com sucesso")}
            else {alert("Erro ao cadastrar professor")}

        } catch(error){alert("Erro ao cadastrar professor "+error)}
        router.push("/professores")
    }
    return (

        <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Informações do Professor</h3>
              <p className="mt-1 text-sm text-gray-600">
                Use apenas seu e-mail institucional (terminado em @cefet-rj.br)
              </p>
              <p className="mt-1 text-sm text-gray-600">Para as turmas, use 1, 2, 3 ou 4 para indicar a série, A, B ou C para o turno e a abreviatura usual do curso técnico.</p>
              <p className="mt-1 text-sm text-gray-600">Separe as turmas por  <strong>vírgula <pre>( , )</pre></strong>. Por exemplo: 1AED, 1AEL, 1BADM para as turmas do primeiro ano, manhã dos cursos de Edificações, Eletrotécnica e primeiro ano tarde de Administração. </p>
              <p className="mt-1 text-sm text-gray-600">Use para nome da sua coordenação a abreviatura usual do cefet. Por exemplo para Matemática use COMAT. </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow overflow-hidden sm:rounded-md"><div className="px-4 py-5 bg-white sm:p-6"><div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                  <input
                    id="nome"
                    {...register("nome")}
                    className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
  
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="siape" className="block text-sm font-medium text-gray-700">Mat. SIAPE</label>
                  <input
                    id="siape"
                    {...register("siape")}
                    className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
  
                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Institucional</label>
                  <input
                    id="email"
                    {...register("email")}
                    className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="coord" className="block text-sm font-medium text-gray-700">Coordenação</label>
                  <input
                    id="coord"
                    {...register("coord")}
                    className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
  
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="celular" className="block text-sm font-medium text-gray-700">Celular</label>
                  <input
                    id="celular"
                    {...register("celular")}
                    className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6">
                  <label htmlFor="turmas" className="block text-sm font-medium text-gray-700">Turmas em que trabalha</label>
                  <input
                    id="turmas"
                    {...register("turmas")}
                    className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
  
              </div>
              </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export {CadastroProfessor}
