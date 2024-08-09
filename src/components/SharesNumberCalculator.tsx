import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import axios from "axios";
import CurrencySelect from "./CurrencySelect.tsx";
import { useNavigate } from "react-router-dom";
import currencies from "../currenciesData.json"; // Import du fichier JSON

const SharesNumberCalculator = () => {
    const navigate = useNavigate();

    const [capitalToInvest, setCapitalToInvest] = useState("1000");
    const [capitalCurrency, setCapitalCurrency] = useState("USD");
    const [sharePrice, setSharePrice] = useState("22.4");
    const [shareCurrency, setshareCurrency] = useState("USD");
    const [perOrderCommission, setPerOrderCommission] = useState("1");
    const [perOrderCommissionCurrency, setPerOrderCommissionCurrency] = useState("USD");
    const [roundPrecision, setRoundPrecision] = useState("3");
    const [result, setResult] = useState(null);

    const pasteToGainLossCalculator = () => {
        console.log('Shares: ', result.sharesNumber);
        console.log('Share price: ', sharePrice);
        navigate('/gainLossCalculator', {
            state: {
                currency: shareCurrency,
                sharesNb: result.sharesNb,
                sharePrice: sharePrice
            }
        });
    }

    const calculateSharesNumber = async () => {
        try {
            console.log(`Debug:\nCapital to invest: ${capitalToInvest}\nShare Price: ${sharePrice}\n`);
            const data = {
                capitalToInvest,
                capitalCurrency,
                sharePrice,
                shareCurrency,
                perOrderCommission,
                perOrderCommissionCurrency,
                roundPrecision
            }
            const headers = {
                accept: "application/json"
            }
            const response = await axios.post("http://localhost:8080/sharesNumberCalculator", data, {
                headers: headers
            });
            setResult(response.data);
        } catch (e) {
            console.error("Error sending data to backend: ", e);
        }
    }

    const getCurrencySymbol = (isoCode) => {
        const currency = currencies.find(currency => currency.iso === isoCode);
        return currency ? currency.symbol : isoCode;
    }

    useEffect(() => {
        console.log('result: ', result);
    }, [result]);

    return (
        <div>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={"10px"}>
                <Typography variant="h3" sx={{margin: "40px"}}>
                    Shares number Calculator
                </Typography>
                <Box className={"tableContainer"} display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={"10px"} minWidth={"450px"}>
                    <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
                        <TextField
                            id="outlined"
                            label="Capital to invest"
                            value={capitalToInvest}
                            onChange={(e) => setCapitalToInvest(e.target.value)}
                            sx={{minWidth: "270px"}}
                        />
                        <CurrencySelect
                            label="Currency"
                            value={capitalCurrency}
                            onChange={(e) => setCapitalCurrency(e.target.value as string)}
                        />
                    </Box>
                    <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
                        <TextField
                            id="outlined"
                            label="Share price"
                            value={sharePrice}
                            onChange={(e) => setSharePrice(e.target.value)}
                            sx={{minWidth: "270px"}}
                        />
                        <CurrencySelect
                            label="Currency"
                            value={shareCurrency}
                            onChange={(e) => setshareCurrency(e.target.value as string)}
                        />
                    </Box>
                    <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
                        <TextField
                            id="outlined"
                            label="Per order commission"
                            value={perOrderCommission}
                            onChange={(e) => setPerOrderCommission(e.target.value)}
                            sx={{minWidth: "270px"}}
                        />
                        <CurrencySelect
                            label="Currency"
                            value={perOrderCommissionCurrency}
                            onChange={(e) => setPerOrderCommissionCurrency(e.target.value as string)}
                        />
                    </Box>
                    <TextField
                        id="outlined"
                        label="Round precision"
                        value={roundPrecision}
                        onChange={(e) => setRoundPrecision(e.target.value)}
                        sx={{maxWidth: "270px"}}
                    />
                    <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                        <Button sx={{margin: "30px", maxWidth: "120px"}} variant="contained" onClick={calculateSharesNumber}>Calculate</Button>
                    </Box>
                    {result && (
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}
                             alignItems={"center"} gap={"10px"}>
                            <Typography variant="h6">You can buy {result.sharesNb} shares with {result.capitalToInvest}{getCurrencySymbol(result.capitalCurrency)} capital</Typography>
                            <Button variant="contained" onClick={pasteToGainLossCalculator}>Paste to Gain Loss Calculator</Button>
                        </Box>
                    )}
                </Box>
            </Box>
        </div>
    );
}

export default SharesNumberCalculator;
