import React from "react"

interface StructuredDataProps {
    data: object // Define a suitable type for your JSON-LD data
}

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
)

export default StructuredData
