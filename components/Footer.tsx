import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="bg-panelBackground text-lightText border-t border-borderDefault mt-auto py-10 px-6 mx-0 w-full">
    <div className="max-w-6xl mx-auto flex flex-col items-center space-y-10">
      
      {/* Logo + descrizione */}
      <div className="max-w-3xl text-center">
        <h3 className="text-aquaAccent font-semibold text-xl mb-2">Validafake</h3>
        <p className="text-sm text-muted">
          Combattiamo la disinformazione con strumenti semplici, educazione digitale e consapevolezza. Il nostro obiettivo è rendere ogni cittadino più consapevole nell’uso delle informazioni online.
        </p>
      </div>

      {/* Navigazione e contatti */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {/* Pagine */}
        <div>
          <h4 className="text-lightText font-semibold mb-3">Pagine</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-aquaAccent transition">Home</Link></li>
            <li><Link href="/fake-news" className="hover:text-aquaAccent transition">Rileva Fake News</Link></li>
            <li><Link href="/origins-goals" className="hover:text-aquaAccent transition">Origine e Scopo</Link></li>
            <li><Link href="/about" className="hover:text-aquaAccent transition">Chi siamo</Link></li>
            <li><Link href="/contatti" className="hover:text-aquaAccent transition">Contatti</Link></li>
            <li><Link href="/login" className="hover:text-aquaAccent transition">Login</Link></li>
          </ul>
        </div>

        {/* Contatti */}
        <div className="text-center">
          <h4 className="text-lightText font-semibold mb-3">Contattaci</h4>
          <p className="text-sm text-muted">
            Per richieste o segnalazioni:<br />
            <a href="mailto:erteamdedama@gmail.com" className="text-aquaAccent hover:underline">
              erteamdedama@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-6 border-t border-borderDefault w-full text-center text-xs text-muted">
         Validafake. 
      </div>
    </div>
  </footer>
);

export default Footer;
