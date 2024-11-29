export const ajouter = (contact) => {
    return { type: 'ajouter', payload: contact }
};

export const supprimer = (id) => {
    return { type: 'supprimer', payload: id }
};

export const modifier = (contact) => {
    return { type: 'modifier', payload: contact }
};
