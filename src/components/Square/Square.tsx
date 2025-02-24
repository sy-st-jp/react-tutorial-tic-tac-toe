import {FC} from "react";

type Props = {
    value: string
}

export const Square: FC<Props> = (props) => {
    const { value } = props
    return (
        <button className="square" type="button">
            { value }
        </button>
    )
}
