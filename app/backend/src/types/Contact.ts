export type Contact = {
    id: number;
    personId: number;
    type: 'telefone' | 'e-mail' | 'whatsapp';
    contact: string;
    description?: string;
};