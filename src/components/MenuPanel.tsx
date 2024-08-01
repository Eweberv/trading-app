import {Box, Button} from "@mui/material";
import {useState} from "react";
import GainLossPotentialCalculator from "./GainLossPotentialCalculator.tsx";
import SharesNumberCalculator from "./SharesNumberCalculator.tsx";

const MenuPanel = () => {
    const [activeComponent, setActiveComponent] = useState<string | null>(null);

    const handleClick = (component : string) => {
        if (activeComponent === component) {
            setActiveComponent(null);
        } else {
            setActiveComponent(component);
        }
    }

    return (
        <Box>
            <Box display="flex"
                 flexDirection={"row"}
                 alignItems="center"
                 gap={4}
                 p={2}
                 sx={{ border: '2px solid grey' }}>
            </Box>
            {activeComponent === 'GainLoss' && <GainLossPotentialCalculator />}
            {activeComponent === 'SharesNumber' && <SharesNumberCalculator />}
        </Box>
    )
}

export default MenuPanel;
