export interface Contact {
    id: number;
    type: 'e-mail' | 'telefone' | 'whatsapp';
    contact: string;
    description: string;
    personId: number;
}