import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://supabase-api.wjdrjsgh.cloud';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const getSummaries = async () => {
    try {
        const { data, error } = await supabase
            .from('summaries')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Error fetching summaries from Supabase:', error);
        return [];
    }
};

export const getSummaryById = async (id) => {
    try {
        const { data, error } = await supabase
            .from('summaries')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching summary detail:', error);
        return null;
    }
};
