import {Box, Button } from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {selectCurrencyValue, setCurrency} from "../Reducers/CurrencySlice.tsx";
import {SelectChangeEvent} from "@mui/material/Select";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    // const dispatch = useDispatch();
    // const pageRedirect = useSelector(selectCurrency);
    //
    // const handleChange = (event: SelectChangeEvent) => {
    //     dispatch(setCurrency(event.target.value as string));
    // };
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route);
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            background: "#070720",
            height: '4rem',
            top: 0,
            width: '100%',
            zIndex: -1,
            borderBottom: "1px solid #0d0d28"
        }}>
            <div style={{ marginLeft: '20px' }}>logo-placeholder</div>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap={3.5} sx={{ marginRight: '50px'}}>
                <Button variant="contained" onClick={() => handleClick('/sharesNumberCalculator')}>Shares number Calculator</Button>
                <Button variant="contained" onClick={() => handleClick('/gainLossCalculator')}>Gain Loss Calculator</Button>
            </Box>
        </div>
    );
};

export default Navbar;