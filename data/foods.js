const foods = [
    // TAPIOCA
    { id: 1, name: "Tapioca de Frango", description: "Frango desfiado com requeijão", price: 12.90, type: "tapioca" },
    { id: 2, name: "Tapioca de Carne Seca", description: "Carne seca com queijo coalho", price: 14.90, type: "tapioca" },
    { id: 3, name: "Tapioca de Presunto e Queijo", description: "Clássica com queijo derretido", price: 10.90, type: "tapioca" },
    { id: 4, name: "Tapioca de Calabresa", description: "Calabresa acebolada", price: 11.90, type: "tapioca" },
    { id: 5, name: "Tapioca de Nutella", description: "Recheio cremoso de Nutella", price: 13.90, type: "tapioca" },
    { id: 6, name: "Tapioca de Banana", description: "Banana com canela", price: 9.90, type: "tapioca" },
    { id: 7, name: "Tapioca de Chocolate", description: "Chocolate ao leite derretido", price: 12.50, type: "tapioca" },
    { id: 8, name: "Tapioca Vegana", description: "Legumes grelhados", price: 11.50, type: "tapioca" },
    { id: 9, name: "Tapioca de Ovo", description: "Ovo mexido com queijo", price: 10.50, type: "tapioca" },
    { id: 10, name: "Tapioca Especial", description: "Frango, queijo e milho", price: 15.90, type: "tapioca" },

    // CUSCUZ
    { id: 11, name: "Cuscuz Simples", description: "Cuscuz tradicional com manteiga", price: 6.90, type: "cuscuz" },
    { id: 12, name: "Cuscuz com Ovo", description: "Cuscuz com ovo frito", price: 8.90, type: "cuscuz" },
    { id: 13, name: "Cuscuz com Carne", description: "Cuscuz com carne moída", price: 11.90, type: "cuscuz" },
    { id: 14, name: "Cuscuz com Frango", description: "Frango desfiado temperado", price: 10.90, type: "cuscuz" },
    { id: 15, name: "Cuscuz com Queijo", description: "Queijo coalho derretido", price: 9.90, type: "cuscuz" },
    { id: 16, name: "Cuscuz Completo", description: "Carne, ovo e queijo", price: 13.90, type: "cuscuz" },
    { id: 17, name: "Cuscuz Vegano", description: "Legumes e azeite", price: 9.50, type: "cuscuz" },
    { id: 18, name: "Cuscuz com Calabresa", description: "Calabresa acebolada", price: 11.50, type: "cuscuz" },
    { id: 19, name: "Cuscuz Doce", description: "Com leite condensado", price: 8.50, type: "cuscuz" },
    { id: 20, name: "Cuscuz Especial", description: "Frango, queijo e milho", price: 12.90, type: "cuscuz" },

    // BOLOS E DOCES
    { id: 21, name: "Bolo de Chocolate", description: "Com cobertura cremosa", price: 7.90, type: "bolos e doces" },
    { id: 22, name: "Bolo de Cenoura", description: "Com calda de chocolate", price: 6.90, type: "bolos e doces" },
    { id: 23, name: "Bolo de Fubá", description: "Tradicional fofinho", price: 5.90, type: "bolos e doces" },
    { id: 24, name: "Bolo de Milho", description: "Feito com milho fresco", price: 6.50, type: "bolos e doces" },
    { id: 25, name: "Brigadeiro", description: "Doce de chocolate", price: 3.50, type: "bolos e doces" },
    { id: 26, name: "Beijinho", description: "Doce de coco", price: 3.50, type: "bolos e doces" },
    { id: 27, name: "Pudim", description: "Leite condensado", price: 6.90, type: "bolos e doces" },
    { id: 28, name: "Cocada", description: "Doce de coco", price: 4.90, type: "bolos e doces" },
    { id: 29, name: "Canjica", description: "Doce tradicional", price: 7.50, type: "bolos e doces" },
    { id: 30, name: "Arroz Doce", description: "Com canela", price: 6.50, type: "bolos e doces" },

    // BEBIDAS
    { id: 31, name: "Água", description: "Garrafa 500ml", price: 3.00, type: "bebidas" },
    { id: 32, name: "Refrigerante Lata", description: "350ml", price: 5.00, type: "bebidas" },
    { id: 33, name: "Suco Natural Laranja", description: "Feito na hora", price: 7.00, type: "bebidas" },
    { id: 34, name: "Suco de Acerola", description: "Natural", price: 7.00, type: "bebidas" },
    { id: 35, name: "Suco de Maracujá", description: "Natural", price: 7.00, type: "bebidas" },
    { id: 36, name: "Vitamina de Banana", description: "Com leite", price: 8.50, type: "bebidas" },
    { id: 37, name: "Chá Gelado", description: "Limão", price: 5.50, type: "bebidas" },
    { id: 38, name: "Água de Coco", description: "Natural", price: 6.00, type: "bebidas" },
    { id: 39, name: "Guaraná Natural", description: "Energético", price: 6.50, type: "bebidas" },
    { id: 40, name: "Suco Detox", description: "Verde", price: 8.00, type: "bebidas" },

    // CAFÉS
    { id: 41, name: "Café Expresso", description: "Tradicional", price: 4.00, type: "cafés" },
    { id: 42, name: "Café com Leite", description: "Clássico", price: 5.00, type: "cafés" },
    { id: 43, name: "Capuccino", description: "Cremoso", price: 7.50, type: "cafés" },
    { id: 44, name: "Latte", description: "Leite vaporizado", price: 7.00, type: "cafés" },
    { id: 45, name: "Mocha", description: "Chocolate + café", price: 8.50, type: "cafés" },
    { id: 46, name: "Café Gelado", description: "Refrescante", price: 6.50, type: "cafés" },
    { id: 47, name: "Café com Canela", description: "Aromático", price: 5.50, type: "cafés" },
    { id: 48, name: "Café Duplo", description: "Mais forte", price: 6.00, type: "cafés" },
    { id: 49, name: "Café com Baunilha", description: "Sabor especial", price: 6.50, type: "cafés" },
    { id: 50, name: "Café Premium", description: "Grãos selecionados", price: 9.00, type: "cafés" },

    // COMBOS
    { id: 51, name: "Combo Café + Bolo", description: "Café + fatia de bolo", price: 10.90, type: "combos" },
    { id: 52, name: "Combo Tapioca + Suco", description: "Escolha livre", price: 18.90, type: "combos" },
    { id: 53, name: "Combo Cuscuz + Café", description: "Cuscuz + café", price: 12.90, type: "combos" },
    { id: 54, name: "Combo Doce + Café", description: "Doce + café", price: 9.90, type: "combos" },
    { id: 55, name: "Combo Completo", description: "Tapioca + suco + doce", price: 25.90, type: "combos" },
    { id: 56, name: "Combo Fitness", description: "Suco detox + tapioca leve", price: 17.90, type: "combos" },
    { id: 57, name: "Combo Kids", description: "Suco + doce", price: 12.50, type: "combos" },
    { id: 58, name: "Combo Café da Manhã", description: "Café + cuscuz + ovo", price: 16.90, type: "combos" },
    { id: 59, name: "Combo Tarde", description: "Café + bolo + doce", price: 14.90, type: "combos" },
    { id: 60, name: "Combo Especial", description: "Escolha 3 itens", price: 29.90, type: "combos" },

    // SAZONAIS
    { id: 61, name: "Milho Cozido", description: "Com manteiga", price: 6.00, type: "sazonais" },
    { id: 62, name: "Pamonha", description: "Doce ou salgada", price: 7.50, type: "sazonais" },
    { id: 63, name: "Curau", description: "Creme de milho", price: 6.50, type: "sazonais" },
    { id: 64, name: "Quentão", description: "Bebida quente típica", price: 8.00, type: "sazonais" },
    { id: 65, name: "Vinho Quente", description: "Tradicional de festa junina", price: 9.00, type: "sazonais" },
    { id: 66, name: "Canjica Especial", description: "Com leite condensado", price: 8.50, type: "sazonais" },
    { id: 67, name: "Bolo de Milho Cremoso", description: "Especial de julho", price: 7.50, type: "sazonais" },
    { id: 68, name: "Pé de Moleque", description: "Amendoim crocante", price: 4.50, type: "sazonais" },
    { id: 69, name: "Paçoca", description: "Doce de amendoim", price: 3.50, type: "sazonais" },
    { id: 70, name: "Cuscuz Junino", description: "Versão especial", price: 10.00, type: "sazonais" }
];

export default foods;