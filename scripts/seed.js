import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Error: VITE_SUPABASE_URL and VITE_SUPABASE_SERVICE_ROLE_KEY must be set in .env');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const welcomeSummary = {
    title: 'Welcome to n8n MindMap Hub',
    content: `# Welcome to n8n MindMap Hub\n## Introduction\n- This summary is loaded from your **Self-Hosted Supabase**!\n- The transition is successful.\n## Next Steps\n- Connect your n8n workflow to this database.\n- Start summarizing videos!`,
    category: 'System',
    youtube_url: 'https://youtube.com',
    thumbnail_url: ''
};

async function seedData() {
    console.log('Seeding data to:', SUPABASE_URL);

    const { data, error } = await supabase
        .from('summaries')
        .insert([welcomeSummary])
        .select();

    if (error) {
        console.error('Error Inserting Data:', error.message);
        if (error.message.includes('relation "summaries" does not exist')) {
            console.error('HINT: The table "summaries" does not exist yet. Please run the SQL migration in the Studio.');
        }
    } else {
        console.log('Success! Inserted record:', data);
    }
}

seedData();
