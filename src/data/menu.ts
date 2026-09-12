/**
 * CARDÁPIO OFICIAL - BAYTA KÃO LANCHES
 * 
 * NOTA PARA O DONO:
 * Para editar itens, preços ou descrições, basta alterar os campos abaixo.
 * Os preços e nomes serão refletidos automaticamente em todo o site e
 * nas mensagens geradas diretamente para o WhatsApp da lancheria.
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  badge?: string;
  image: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "xis",
    name: "XIS",
    description: "Prensado no capricho na chapa quente de ferro com maionese da casa, queijo derretido, tomate, alface, milho e ervilha.",
    items: [
      {
        id: "xis-salada",
        name: "Xis Salada Clássico",
        description: "Hambúrguer artesanal de carne bovina moída fresca, queijo prato derretido, ovo na chapa, presunto, alface, tomate, milho, ervilha e a famosa maionese Bayta.",
        price: "R$ 34,00",
        badge: "O Mais Pedido",
        isPopular: true,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "xis-coracao",
        name: "Xis Coração Gaúcho",
        description: "Coração de galinha limpo e marinado na chapa bem tostado, queijo em dobro derretido, ovo frito, salada fresca e maionese especial.",
        price: "R$ 42,00",
        badge: "Tradição de POA",
        isPopular: true,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "xis-bacon",
        name: "Xis Bacon Crocante",
        description: "Hambúrguer bovino com fatias grossas de bacon defumado crocante na chapa, queijo, ovo, presunto, salada completa e maionese temperada.",
        price: "R$ 39,00",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "xis-carne-panela",
        name: "Xis Carne de Panela",
        description: "Carne de panela bovina desfiada cozida lentamente com temperos caseiros, molho encorpado, queijo chapeado, ovo e salada.",
        price: "R$ 44,00",
        badge: "Receita Especial",
        isPopular: true,
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "xis-frango",
        name: "Xis Frango Desfiado",
        description: "Peito de frango selecionado refogado na chapa com cheiro verde, queijo chapeado, presunto, ovo, salada e milho verde.",
        price: "R$ 36,00",
        image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "xis-tudo",
        name: "Bayta Tudo 11 Anos",
        description: "O monstro da casa: hambúrguer duplo, fatias de filé, coração, bacon crocante, 2 ovos, queijo duplo, presunto e salada monstra.",
        price: "R$ 54,00",
        badge: "Pesado",
        isPopular: true,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "baurus",
    name: "BAURUS",
    description: "Cortes nobres preparados na hora, queijo fundido, ovos e molhos autênticos servidos no pão ou no prato.",
    items: [
      {
        id: "bauru-file-prato",
        name: "Bauru ao Prato de Filé Mignon",
        description: "Medalhões de filé mignon grelhados no ponto, presunto, queijo mussarela gratinado, ovos caipiras, pão de xis tostado com manteiga e fritas.",
        price: "R$ 56,00",
        badge: "Serve 2 Pessoas",
        isPopular: true,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "bauru-pao-tradicional",
        name: "Bauru ao Pão de Alcatra",
        description: "Tiras suculentas de alcatra na manteiga de garrafa, queijo prato derretido, tomate cereja tostado, ovo frito e maionese no pão de xis crocante.",
        price: "R$ 44,00",
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "bauru-quatro-queijos",
        name: "Bauru 4 Queijos ao Prato",
        description: "Filé de alcatra chapeado coberto com blend cremoso de mussarela, provolone defumado, gorgonzola suave e requeijão tostado.",
        price: "R$ 58,00",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "dogs",
    name: "DOGS",
    description: "Cachorro-quente de respeito, prensado na chapa com duas salsichas ou linguiça campeira, molho caseiro e batata palha fina.",
    items: [
      {
        id: "dog-prensado-especial",
        name: "Dog Prensado Especial",
        description: "Duas salsichas cortadas ao meio na chapa, molho de tomate caseiro com cebola refogada, queijo derretido, milho, ervilha e batata palha crocante.",
        price: "R$ 26,00",
        badge: "Clássico da Esquina",
        isPopular: true,
        image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "dog-linguica-campeira",
        name: "Dog Campeiro com Linguiça",
        description: "Linguiça mista artesanal aberta e tostada na chapa, queijo colonial gaúcho, vinagrete fresco, mostarda escura e maionese da casa.",
        price: "R$ 31,00",
        image: "https://images.unsplash.com/photo-1627054234057-0a2a4b87cb89?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "dog-duplo-queijo",
        name: "Dog Duplo com Queijo Fundido",
        description: "Salsicha dupla, camada espessa de queijo mussarela fundido no bafo da chapa, molho picante suave e orégano fresco.",
        price: "R$ 29,00",
        image: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "porcoes",
    name: "PORÇÕES",
    description: "Para dividir na esplanada ou pedir junto com a janta. Fritas sequinhas e iscas no ponto certo.",
    items: [
      {
        id: "porcao-batata-cheddar-bacon",
        name: "Batata Frita Bayta (Cheddar & Bacon)",
        description: "500g de batatas palito crocantes sequinhas, cobertas com molho cheddar artesanal cremoso e cubos de bacon dourados na hora.",
        price: "R$ 38,00",
        badge: "Para Compartilhar",
        isPopular: true,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "porcao-polenta-crocante",
        name: "Polenta Frita Crocante com Queijo",
        description: "Palitos de polenta frita no ponto exato (crocante por fora, macia por dentro), polvilhados com queijo parmesão ralado grosso.",
        price: "R$ 32,00",
        image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "porcao-iscas-file",
        name: "Iscas de Filé na Chapa com Cebola",
        description: "Tiras suculentas de filé mignon salteadas na chapa de ferro com cebolas caramelizadas e fatias de pão tostado de cortesia.",
        price: "R$ 58,00",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "bebidas",
    name: "BEBIDAS",
    description: "Refrigerantes trincando de gelados, cervejas bem tiradas e sucos naturais para acompanhar seu lanche.",
    items: [
      {
        id: "fruki-guarana-2l",
        name: "Fruki Guaraná 2 Litros",
        description: "O legítimo guaraná gaúcho, indispensável com o xis. Garrafa pet 2L estupidamente gelada.",
        price: "R$ 16,00",
        badge: "Gaúcho Raiz",
        isPopular: true,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "cerveja-polar-latão",
        name: "Cerveja Polar Export Latão 473ml",
        description: "A melhor cerveja da nossa terra. Servida trincando com anel gelado.",
        price: "R$ 10,00",
        image: "https://images.unsplash.com/photo-1608270119238-a28a1c8caec4?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "coca-cola-lata",
        name: "Coca-Cola Original 350ml",
        description: "Lata 350ml tradicional ou Zero Açúcar bem gelada.",
        price: "R$ 7,50",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "suco-laranja-natural",
        name: "Suco Natural de Laranja 500ml",
        description: "Feito na hora da fruta fresca espremida no dia, servido com gelo.",
        price: "R$ 12,00",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
];
