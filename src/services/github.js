import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN
});

const OWNER = import.meta.env.VITE_GITHUB_OWNER || 'wjdrjsgho';
const REPO = import.meta.env.VITE_GITHUB_REPO || 'n8n-youtube';
const PATH = 'summaries'; // Looking into the summaries folder

export const getSummaries = async () => {
    try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: OWNER,
            repo: REPO,
            path: PATH
        });

        if (!Array.isArray(response.data)) {
            console.error('Expected array of files but got:', response.data);
            return [];
        }

        // Filter for markdown files
        return response.data
            .filter(file => file.name.endsWith('.md'))
            .map(file => ({
                name: file.name,
                path: file.path,
                sha: file.sha,
                download_url: file.download_url
            }));

    } catch (error) {
        console.error('Error fetching summaries:', error);
        return [];
    }
};

export const getSummaryContent = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch content');
        return await response.text();
    } catch (error) {
        console.error('Error fetching file content:', error);
        return '# Error\nCould not load file.';
    }
};
