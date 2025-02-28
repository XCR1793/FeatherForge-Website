import Header from '../components/header';

function Contacts() {
    return (
        <>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>Contacts</h1>
            </div>
        </>
    );
}

export default Contacts;
