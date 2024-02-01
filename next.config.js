/** @type {import('next').NextConfig} */

module.exports = async () => {
    const nextConfig = {
        redirects: async () => {
            return [
                {
                    source: '/',
                    destination: '/home',
                    permanent: true,
                }
            ];
        }
    };

    return nextConfig;
};

