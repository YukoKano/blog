import styles from "@/styles/Social.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Social = ({ iconSize = "initial" }) => {
  return (
    //  "--icon-size": iconSizeの書き方できるんだ
    // rootの中に--icon-sizeで宣言しなくてもカスタムプロパティになる？
    // ↑GPTに聞いたら「そのセレクタ内や子孫要素内でのみ有効なローカル変数として機能します。」らしい
    <ul className={styles.list} style={{ "--icon-size": iconSize }}>
      <li>
        <a href="https://twitter.com/?lang=ja">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/?locale=ja_JP">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/YukoKano">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  );
};
