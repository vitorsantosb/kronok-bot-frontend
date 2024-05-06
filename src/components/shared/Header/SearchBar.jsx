import { IconSearch } from "@tabler/icons-react";
import { Autocomplete, rem } from "@mantine/core";
function SearchBar() {
    return (
        <Autocomplete
            style={{
                width: "50%",
                margin: " 0 auto",
            }}
            placeholder="Search"
            leftSection={<IconSearch style={{ color: "white", width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={["React", "Angular", "Vue", "Next.js", "Riot.js", "Svelte", "Blitz.js"]}
            visibleFrom="xs"
            styles={{ input: { backgroundColor: "#5b5e65", color: "white" } }}
        />
    );
}
export default SearchBar;
