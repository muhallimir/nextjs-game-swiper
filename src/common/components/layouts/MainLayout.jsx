import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';


export default function Mainlayout({ children }) {
    const router = useRouter();
    const { theme: mode } = useSelector(({ app }) => app)

    return (
        <Box textAlign='center' sx={{ backgroundColor: mode === 'dark' ? 'common.black' : 'common.white' }}>
            <Box location={router.pathname}>
                {children}
            </Box>
        </Box>

    );
}