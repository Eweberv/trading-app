import './App.css'
import {Box, Typography} from "@mui/material";
import MenuPanel from "./components/MenuPanel.tsx";

function App() {
    // const testRoute = async() => {
    //     try {
    //         await axios.post("http://localhost:8080/testRoute", {})
    //     } catch(e) {
    //         console.error("Erreur lors de l'envoi des données au backend:", e);
    //     }
    // }
    return (
        <Box display={"flex"} flexDirection={"column"}  minHeight={"100vh"}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                {/*<MenuPanel></MenuPanel>*/}
                <Typography variant="h3" sx={{margin: "40px"}}>
                    Trading App
                </Typography>
            </Box>

            {/*<Box display="flex" flexDirection="column"  border="2px solid red" maxWidth="200px">*/}
            {/*    <BasicSelect/>*/}
            {/*</Box>*/}
        </Box>
    )
}

export default App
