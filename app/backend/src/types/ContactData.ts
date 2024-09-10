export type ContactData = {
    personId: number;
    type: 'telefone' | 'e-mail' | 'whatsapp';
    contact: string;
    description?: string;
};