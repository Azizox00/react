export const ajouter = (produit) => {
    return { type: 'ajouter', payload: produit }
};

export const supprimer = (id) => {
    return { type: 'supprimer', payload: id }
};

export const modifier = (produit) => {
    return { type: 'modifier', payload: produit }
};