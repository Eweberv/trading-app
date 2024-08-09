import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect.tsx";
import { useLocation } from 'react-router-dom';

const GainLossPotentialCalculator = () => {
    const location = useLocation();
    const [currency, setCurrency] = useState(location.state?.currency || "USD");
    const [sharePrice, setSharePrice] = useState(location.state?.sharePrice || "53.89");
    const [sharesNb, setSharesNb] = useState(location.state?.sharesNb || "14.4");
    const [TPPrice, setTPPrice] = useState("56.59");
    const [SLPrice, setSLPrice] = useState("52.8");
    const [result, setResult] = useState(null);

    const calculateGainLossPotential = async () => {
        try {
            console.log(`Debug:\ninvestment: ${sharesNb}\nfillPrice: ${sharePrice}\nTPPrice: ${TPPrice}\nSLPrice: ${SLPrice}\n`);
            const data = {
                currency,
                sharesNb,
                sharePrice,
                TPPrice,
                SLPrice,
            };
            const headers = {
                accept: "application/json"
            };
            const response = await axios.post("http://localhost:8080/gainLossPotentialCalculator", data, {
                headers: headers
            });
            setResult(response.data);
        } catch (e) {
            console.error("Error sending data to backend: ", e);
        }
    };

    useEffect(() => {
        console.log('result: ', result);
    }, [result]);

    return (
        <div>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={"10px"}>
                <Typography variant="h3" sx={{margin: "40px"}}>
                    Gain Loss Calculator
                </Typography>
                <Box className={"tableContainer"}>
                    <Box className={"selectContainer"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"10px"} sx={{ width: "100%" }} >
                    <CurrencySelect
                        label="Shares currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value as string)}
                        sx={{ width: "100%" }}
                    />
                    <TextField
                        display={"flexGrow"}
                        className={"fullWidth"}
                        id="outlined"
                        label="Share price"
                        value={sharePrice}
                        onChange={(e) => setSharePrice(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        className={"fullWidth"}
                        id="outlined"
                        label="Shares"
                        value={sharesNb}
                        onChange={(e) => setSharesNb(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        className={"fullWidth"}
                        id="outlined"
                        label="TP price"
                        value={TPPrice}
                        onChange={(e) => setTPPrice(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        className={"fullWidth"}
                        id="outlined"
                        label="SL price"
                        value={SLPrice}
                        onChange={(e) => setSLPrice(e.target.value)}
                        fullWidth
                    />
                    <Button sx={{margin: "30px"}} variant="contained" onClick={calculateGainLossPotential}>Calculate</Button>
                    </Box>
                    {result && (
                        <Box>
                            <Typography variant="h6" sx={{ marginTop: 2 }}>
                                Gain Potential : <span style={{ color: '#00c280' }}>+{result.gainPotential}{result.currency} (+{result.gainPotentialPercent}%)</span>
                            </Typography>
                            <Typography variant="h6" sx={{ marginTop: 2 }}>
                                Loss Potential : <span style={{ color: '#ea0017' }}>{result.lossPotential}{result.currency} ({-result.lossPotentialPercent}%)</span>
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </div>
    );
};

export default GainLossPotentialCalculator;
