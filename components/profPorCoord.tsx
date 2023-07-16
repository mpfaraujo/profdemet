'use client'
import { useState } from 'react'
import { formatTel } from '@/lib/formatNumeros'

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

import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const ProfCoord = ({ profs }: propsProps) => {
  const [coord, setCoord] = useState('');

  return (
    <>
      <span>Escolha a Coordenação <input value={coord} onChange={(e) => setCoord(e.target.value)} className="bg-gray-300 p-2 w-[6em]" /></span><br />
      {coord !== '' && (
        <Table>
          <TableCaption>Lista dos Professores da {coord}</TableCaption>
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
  {profs.map((professor) =>
    professor.coord.toUpperCase().trim() === coord.toUpperCase().trim() ? (
      <TableRow key={professor.id}>
        <TableCell>{professor.nome}</TableCell>
        <TableCell>{professor.email}</TableCell>
        <TableCell>{professor.siape}</TableCell>
        <TableCell>{professor.coord.toUpperCase()}</TableCell>
        <TableCell>{formatTel(professor.celular)}</TableCell>
      </TableRow>
    ) : null
  )}
</TableBody>
        </Table>
      )}
    </>
  );
};

export default ProfCoord;

