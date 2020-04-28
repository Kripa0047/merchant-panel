import React from 'react';
// importing css
import styles from './list.module.css';

const list = () => {
    return (
        <div className={styles.subContanier}>
            <table className={styles.myTable}>
                <thead>
                    <tr>
                        <th>Deal</th>
                        <th>Start</th>
                        <th>Expiry</th>
                        <th>Approval</th>
                        <th>Type</th>
                        <th>QTY</th>
                        <th>Sold</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* LIST DATA WILL BE SET HERE */}
                    <tr>
                        <td>Good</td>
                        <td style={{ color: "#53c242" }}>20/10/2020</td>
                        <td style={{ color: "#ff4942" }}>20/10/2020</td>
                        <td>13/12/2020</td>
                        <td>Half Day</td>
                        <td>1000</td>
                        <td>0</td>
                        <td>...</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default list;