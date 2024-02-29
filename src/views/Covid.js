// Code: Hiển thị thông tin về số ca nhiễm và tử vong do Covid-19 tại Việt Nam
import useFetch from "../customize/fetch";

const Covid = () => {
    const { data: dataCovid, isLoading, isError } = useFetch('https://65db4bb03ea883a1529177dd.mockapi.io/SocaNhiemvaTuvong');
    return (
        < table id="customers" >
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tỉnh/TP</th>
                    <th>Ca nhiễm</th>
                    <th>24 giờ</th>
                    <th>Tử vong</th>
                </tr>
            </thead>
            <tbody>
                {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
                    dataCovid.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.Tinh_TP}</td>
                                <td>{item.Tong_so_ca}</td>
                                <td>{item._24}</td>
                                <td>{item.Tu_vong}</td>
                            </tr>
                        )
                    })}
                {isLoading === true && <tr><td colSpan="5" style={{ textAlign: 'center' }}>Loading...</td></tr>}
                {isError === true && <tr><td colSpan="5" style={{ textAlign: 'center' }}>Something wrong...</td></tr>}
            </tbody>

        </table >
    )
}

export default Covid;