"use client";

import { EpisodeTable,Hero } from "@/components";

const Page = () => {
    return (<div>
        <Hero
            title="Episodes"
        />
        <EpisodeTable />
    </div>)
}

export default Page;