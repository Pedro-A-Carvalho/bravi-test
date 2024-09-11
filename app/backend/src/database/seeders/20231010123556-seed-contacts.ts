import { QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const contacts = [
      { person_id: 1, type: 'telefone', contact: '123-456-7890', description: 'Primary contact' },
      { person_id: 1, type: 'e-mail', contact: 'john.doe@example.com', description: 'Work contact' },
      { person_id: 2, type: 'telefone', contact: '234-567-8901', description: 'Secondary contact' },
      { person_id: 2, type: 'whatsapp', contact: '345-678-9012', description: 'Personal contact' },
      { person_id: 3, type: 'e-mail', contact: 'alice.johnson@example.com', description: 'Primary contact' },
      { person_id: 3, type: 'telefone', contact: '456-789-0123', description: 'Work contact' },
      { person_id: 4, type: 'whatsapp', contact: '567-890-1234', description: 'Emergency contact' },
      { person_id: 4, type: 'e-mail', contact: 'bob.brown@example.com', description: 'Primary contact' },
      { person_id: 5, type: 'telefone', contact: '678-901-2345', description: 'Secondary contact' },
      { person_id: 5, type: 'whatsapp', contact: '789-012-3456', description: 'Personal contact' },
      { person_id: 6, type: 'e-mail', contact: 'diana.evans@example.com', description: 'Work contact' },
      { person_id: 6, type: 'telefone', contact: '890-123-4567', description: 'Primary contact' },
      { person_id: 7, type: 'whatsapp', contact: '901-234-5678', description: 'Emergency contact' },
      { person_id: 7, type: 'e-mail', contact: 'ethan.harris@example.com', description: 'Primary contact' },
      { person_id: 8, type: 'telefone', contact: '012-345-6789', description: 'Secondary contact' },
      { person_id: 8, type: 'whatsapp', contact: '123-456-7890', description: 'Personal contact' },
      { person_id: 9, type: 'e-mail', contact: 'george.lewis@example.com', description: 'Work contact' },
      { person_id: 9, type: 'telefone', contact: '234-567-8901', description: 'Primary contact' },
      { person_id: 10, type: 'whatsapp', contact: '345-678-9012', description: 'Emergency contact' },
      { person_id: 10, type: 'e-mail', contact: 'hannah.walker@example.com', description: 'Primary contact' },
      { person_id: 11, type: 'telefone', contact: '456-789-0123', description: 'Secondary contact' },
      { person_id: 11, type: 'whatsapp', contact: '567-890-1234', description: 'Personal contact' },
      { person_id: 12, type: 'e-mail', contact: 'ian.young@example.com', description: 'Work contact' },
      { person_id: 12, type: 'telefone', contact: '678-901-2345', description: 'Primary contact' },
      { person_id: 13, type: 'whatsapp', contact: '789-012-3456', description: 'Emergency contact' },
      { person_id: 13, type: 'e-mail', contact: 'jack.king@example.com', description: 'Primary contact' },
      { person_id: 14, type: 'telefone', contact: '890-123-4567', description: 'Secondary contact' },
      { person_id: 14, type: 'whatsapp', contact: '901-234-5678', description: 'Personal contact' },
      { person_id: 15, type: 'e-mail', contact: 'karen.wright@example.com', description: 'Work contact' },
      { person_id: 15, type: 'telefone', contact: '012-345-6789', description: 'Primary contact' },
      { person_id: 16, type: 'whatsapp', contact: '123-456-7890', description: 'Emergency contact' },
      { person_id: 16, type: 'e-mail', contact: 'liam.scott@example.com', description: 'Primary contact' },
      { person_id: 17, type: 'telefone', contact: '234-567-8901', description: 'Secondary contact' },
      { person_id: 17, type: 'whatsapp', contact: '345-678-9012', description: 'Personal contact' },
      { person_id: 18, type: 'e-mail', contact: 'mia.green@example.com', description: 'Work contact' },
      { person_id: 18, type: 'telefone', contact: '456-789-0123', description: 'Primary contact' },
      { person_id: 19, type: 'whatsapp', contact: '567-890-1234', description: 'Emergency contact' },
      { person_id: 19, type: 'e-mail', contact: 'noah.adams@example.com', description: 'Primary contact' },
      { person_id: 20, type: 'telefone', contact: '678-901-2345', description: 'Secondary contact' },
      { person_id: 20, type: 'whatsapp', contact: '789-012-3456', description: 'Personal contact' },
      { person_id: 21, type: 'e-mail', contact: 'olivia.baker@example.com', description: 'Work contact' },
      { person_id: 21, type: 'telefone', contact: '890-123-4567', description: 'Primary contact' },
      { person_id: 22, type: 'whatsapp', contact: '901-234-5678', description: 'Emergency contact' },
      { person_id: 22, type: 'e-mail', contact: 'paul.carter@example.com', description: 'Primary contact' },
      { person_id: 23, type: 'telefone', contact: '012-345-6789', description: 'Secondary contact' },
      { person_id: 23, type: 'whatsapp', contact: '123-456-7890', description: 'Personal contact' },
      { person_id: 24, type: 'e-mail', contact: 'quinn.mitchell@example.com', description: 'Work contact' },
      { person_id: 24, type: 'telefone', contact: '234-567-8901', description: 'Primary contact' },
      { person_id: 25, type: 'whatsapp', contact: '345-678-9012', description: 'Emergency contact' },
      { person_id: 25, type: 'e-mail', contact: 'rachel.perez@example.com', description: 'Primary contact' },
    ];

    await queryInterface.bulkInsert('contacts', contacts, {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('contacts', {});
  }
};