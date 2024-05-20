<?php 

use App\Controllers\ProductTypeController;
use PHPUnit\Framework\TestCase;

class ProductTypeControllerTest extends TestCase {

    public function testAll() {
        $controller = new ProductTypeController();

        ob_start();
        $controller->index();
        $output = ob_get_clean();

        $result = json_decode($output, true);

        $this->assertNotNull($result);

        $this->assertIsArray($result);

        $this->assertGreaterThan(0, count($result));

        foreach ($result as $productType) {
            $this->assertArrayHasKey('id', $productType);
            $this->assertArrayHasKey('product_type', $productType);
            $this->assertArrayHasKey('tax_percentage', $productType);
        }
    }
}
?>
