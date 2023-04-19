interface EmojiProps {
  symbol: string;
  label?: string;
}

const Emoji = ({ symbol, label }: EmojiProps) => (
  <span
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);

export default Emoji;
