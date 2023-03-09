// url path to this is localhost/home because (marketing) is ignoreg in path because it is in parantheses
// If you create a page.tsx in app/home, it will be a collision, and the first one in file explorer will be loaded
export default function MarketingHome() {
    return <div>Marketing Home</div>
}