export function formatCnpjCpf(value:string)
{
  const cnpjCpf = value.replace(/\D/g, '')

  if (cnpjCpf.length === 11) {
    return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4")
  }

  return cnpjCpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3/\$4-\$5")
}

export function formatTel(value:string){
    const tel =value.replace(/\D/g, '' )

if(tel.length === 11){
    return tel.replace(/(\d{2})(\d{5})(\d{4})/g, "(\$1)\$2-$3")
} else if(tel.length === 0){return ""}
    return tel.replace(/(\d{2})(\d{4})(\d{4})/g, "(\$1)\$2-$3")


}
