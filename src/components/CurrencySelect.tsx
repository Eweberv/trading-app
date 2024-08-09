import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import currenciesData from "../currenciesData.json"

interface CurrencySelectProps {
    value: string;
    label: string;
    onChange: (event: SelectChangeEvent) => void;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ value, label, onChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="currencySelectLabel">{label}</InputLabel>
            <Select
                labelId="currencySelectLabel"
                id="currencySelect"
                value={value}
                label={label}
                onChange={onChange}
            >
                {currenciesData.map((e) => <MenuItem value={e.iso}>{e.symbol} - {e.description}</MenuItem>)}
            </Select>
        </FormControl>
    );
};

export default CurrencySelect;
