'use client'
import { useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { formatTel } from "@/lib/formatNumeros"

type Professor = {
  id: string
  nome: string
  siape: string
  celular:string
  email:string
  coord: string
  turmas: string
};
type propsProps ={
    profs:Array<Professor>
}

const ProfTurma = ({ profs }: propsProps) => {
    const [turma, setTurma] = useState('');
  
    return (
      <>
        <span>Escolha a Turma <input value={turma} onChange={(e) => setTurma(e.target.value)} className="bg-gray-300 p-2 w-[6em]  dark:bg-gray-700 dark:text-gray-100" /></span><br />
        {turma !== '' && (
          <Table>
            <TableCaption>Lista dos professores da turma {turma}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Professor</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>SIAPE</TableHead>
                <TableHead>Coordenação</TableHead>
                <TableHead>Celular</TableHead>
              </TableRow>
            </TableHeader>
                        <TableBody>
            {profs.map((professor, index) => {
              const turmasArray = professor.turmas.split(','); // Converte a string de turmas em um array
              let hasTurma = false;

              for (let i = 0; i < turmasArray.length; i++) {
                if (turmasArray[i].trim().toUpperCase() === turma.toUpperCase()) {
                  hasTurma = true;
                  break;
                }
              }

              if (hasTurma) {
                return (
                  <TableRow key={professor.id}>
                    <TableCell>{professor.nome}</TableCell>
                    <TableCell>{professor.email}</TableCell>
                    <TableCell>{professor.siape}</TableCell>
                    <TableCell>{professor.coord.toUpperCase()}</TableCell>
                    <TableCell>{formatTel(professor.celular)}</TableCell>
                  </TableRow>
                );
              } else {
                return null;
              }
            })}
          </TableBody>
          </Table>
        )}
      </>
    );
  };
  
  export default ProfTurma;
