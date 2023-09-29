import comidas from '../../../public/img/delicias.jpg'
import jiujitsu from '../../../public/img/projetojiujitsu.jpg'
import alcoolatras from '../../../public/img/alcoolatras.jpg'
import domingo from '../../../public/img/domingo.jpg'
import segunda from '../../../public/img/segunda2.jpg'
import quarta from '../../../public/img/quarta2.jpg'
import terça from '../../../public/img/jiu.jpg'
import rodrigo from '../../../public/img/rodrigo.jpg'
import renata from '../../../public/img/renata.jpg'
import celio from '../../../public/img/celio.jpg'
import fabio from '../../../public/img/fabio.jpg'

export const DataVp = {
  news: [
    {
      id: '1',
      url: domingo,
      title: 'Domingo - Culto de adoração',
      description: 'Todo domingo, de 10:00 até 12:00, culto para adorar a Deus',
      page: 'viladapenha',
    },
    {
      id: '2',
      url: segunda,
      title: 'Segunda - Culto de consagração',
      description: 'Toda segunda, de 19:30 até 21:30, culto para adorar Deus',
      page: 'viladapenha',
    },
    {
      id: '3',
      url: quarta,
      title: 'Quarta - Culto em busca do  Espírito Santo',
      description:
        'Toda quarta, de 18:30 até 20:30, culto em busca do Espírito Santo. ',
      page: 'viladapenha',
    },
    {
      id: '4',
      url: terça,
      title: 'Terça - projeto jiu-jítsu',
      description:
        'Toda terça e sexta, de 19:00 até 21:00, nosso projeto social de Jiu-jítsu. Venha fazer parte!',
      page: 'viladapenha',
    },
    {
      id: '5',
      url: jiujitsu,
      title: 'Sexta - projeto jiu-jítsu',
      description:
        'Toda sexta, de 19:00 até 21:00, nosso projeto social de Jiu-jítsu. Venha fazer parte!',
      page: 'viladapenha',
    },
    {
      id: '6',
      url: comidas,
      title: 'Sábado - dia das delícias',
      description:
        'Sábado, às 18:30, dia das delícias. Uma vez por mês, temos nosso evento com diversas comidas para você e sua família.',
      page: 'viladapenha',
    },
    {
      id: '7',
      url: alcoolatras,
      title: 'Alcoólicos Anônimos',
      description:
        'Quinta, às 18:30, uma vez por mês, temos um grande projeto para ajudar quem precisa deixar de vez o alcoolismo. O Alcoólicos Anônimos está em varios países, ajudando milhares de pessoas. ',
      page: 'viladapenha',
    },
  ],
  agenda: [
    {
      day: 'Domingo',
      title: 'Escola bíblica dominical',
      hora: '08:00/10:00',
      titletwo: 'Culto de adoração',
      horatwo: '10:00/12:00',
      trueitem: true,
    },
    {
      day: 'Segunda',
      title: 'Culto de consagração',
      hora: '19:30/21:30',
      titletwo: false,
      horatwo: false,
      trueitem: false,
    },
    {
      day: 'Terça',
      title: 'Projeto Jiu-Jitsu',
      hora: '19:00/21:00',
      titletwo: false,
      horatwo: false,
      trueitem: false,
    },
    {
      day: 'Quarta',
      title: 'Culto em busca do  Espírito Santo',
      hora: '18:30/20:30',
      titletwo: false,
      horatwo: false,
      trueitem: false,
    },
    {
      day: 'Sexta',
      title: 'Projeto Jiu-Jitsu',
      hora: '19:00/21:00',
      titletwo: false,
      horatwo: false,
      trueitem: false,
    },
    {
      day: 'Sábado',
      title: 'Dia das delícias',
      hora: '18:30/22:00',
      titletwo: false,
      horatwo: false,
      trueitem: false,
    },
  ],
  ministerio: [
    {
      id: '1',
      nome: 'Rodrigo Macedo',
      titulo: 'Pastor Dirigente',
      local: 'Vila da Penha',
      img: rodrigo,
    },
    {
      id: '2',
      nome: 'Renata Barros',
      titulo: 'Pastora',
      local: 'Vila da Penha',
      img: renata,
    },
    {
      id: '3',
      nome: 'Fábio Falcão',
      titulo: 'Presbítero',
      local: 'Vila da Penha',
      img: fabio,
    },
    {
      id: '4',
      nome: 'Célio Nascimento',
      titulo: 'Diácono',
      local: 'Vila da Penha',
      img: celio,
    },
  ],
}
