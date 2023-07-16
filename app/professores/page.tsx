
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table'
import { formatTel } from "@/lib/formatNumeros"
import ProfCoord from "@/components/profPorCoord"
import ProfTurma from "@/components/profPorTurma"
import { Professor } from "@/types/formTypes"

async function pegaProfs() {
  //const data = await fetch('https://profdemet.vercel.app/api/listagem')
  // const data = await fetch('http://localhost:3000/api/listagem', { cache: "no-cache" })
  //const res = await data.json()
  //return res
  const data = await prisma.professor.findMany()
  return data
}

const Professores = async () => {

  const profs: Array<Professor> = await pegaProfs()
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Tabs defaultValue="Todos" className="w-[800px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="Todos">Todos</TabsTrigger>
          <TabsTrigger value="Coordenação">Por Coordenação</TabsTrigger>
          <TabsTrigger value="Turmas">Por Turma</TabsTrigger>
        </TabsList>
        <TabsContent value="Todos">
          <Table>
            <TableCaption>Lista de Todos os Professores</TableCaption>
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
              {profs ? profs.map((professor, index) => {
                return (<TableRow key={professor.id}>
                  <TableCell>{professor.nome}</TableCell>
                  <TableCell>{professor.email}</TableCell>
                  <TableCell>{professor.siape}</TableCell>
                  <TableCell>{professor.coord}</TableCell>
                  <TableCell>{formatTel(professor.celular)}</TableCell>
                </TableRow>)
              }) : null}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="Coordenação">
          <ProfCoord profs={profs ? profs : []} />
        </TabsContent>
        <TabsContent value="Turmas">
          <ProfTurma profs={profs ? profs : []} />
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default Professores

