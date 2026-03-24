import { useLanguage } from "@/context/language-context";
import { ToggleGroup } from "../ui/toggle";


export default function LanguageToggle() {
    const { language, setLanguage, t } = useLanguage()
    return (
        <ToggleGroup
            value={language}
            onValueChange={(val) => setLanguage(val as "en" | "pt")}
            options={[
                { value: "en", label: "EN" },
                { value: "pt", label: "PT" },
            ]}
        />
    )
}