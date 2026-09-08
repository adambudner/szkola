<?php
    header("Refresh: 10;");
    $conn = new mysqli("localhost", "root", "", "3tf_11");
?>


<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OPONY</title>
    <link rel="stylesheet" href="style.css">
</head>     
<body>
        <main>
            <aside>
                <?php
                    // Skrypt #1
                    $query = "SELECT nr_kat, producent, model, sezon, cena FROM opony ORDER BY cena LIMIT 10;";
                    $result = $conn->query($query);
                    while($row = $result->fetch_assoc()) {
                        echo "<div class='opona'>";
                        if ($row['sezon'] == 'letnia') {
                            echo "<img src='img/lato.png' alt='Lato'>";
                        } elseif ($row['sezon'] == 'zimowa') {
                            echo "<img src='img/zima.png' alt='Zima'>";
                        } else {
                            echo "<img src='img/uniwer.png' alt='Uniwersalna'>";
                        }
                        echo "<h4>Opona: " . $row['producent'] . " " . $row['model'] . "</h4>";
                        echo "<h3>Cena: " . $row['cena'] . " PLN</h3>";
                        echo "</div>";
                    }
                ?>
                <p><a href="https://opona.pl/">więcej ofert</a></p>
            </aside>

            <section id="gora">
                <img src="img/opona.png" alt="Opona">
                <h2>Opona dnia</h2>
                <?php
                    // Skrypt #2
                    $query = "SELECT producent, model, sezon, cena FROM opony WHERE nr_kat = 9;";
                    $result = $conn->query($query);
                    if($row = $result->fetch_assoc()) {
                        echo "<h2>" . $row['producent'] . " model " . $row['model'] . "</h2>";
                        echo "<h2>Sezon: " . $row['sezon'] . "</h2>";
                        echo "<h2>Cena: " . $row['cena'] . " PLN</h2>";
                    }
                ?>
            </section>

            <section id="dol">
                <h2>Najnowsze zamówienie</h2>
                <?php
                    // Skrypt #3
                    $query = "SELECT id_zam, ilosc, model, cena FROM zamowienie JOIN opony USING (nr_kat) ORDER BY RAND() LIMIT 1;";
                    $result = $conn->query($query);
                    if($row = $result->fetch_assoc()) {
                        echo "<h2>" . $row['id_zam'] ." ". $row['ilosc'] . " sztuki modelu " . $row['model'] . "</h2>";
                        echo "<h2>Wartość zamówienia: " . $row['cena'] . " zł</h2>";
                    }
                ?>
            </section>
        </main>
    <footer>
        <p>wykonal strone ab</p>
    </footer>
</body>
</html>

<?php
    $conn->close();
?>