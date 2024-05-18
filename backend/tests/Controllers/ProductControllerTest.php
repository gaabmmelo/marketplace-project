<?php 

use App\Controllers\ProductController;
use PHPUnit\Framework\TestCase;

class ProductControllerTest extends TestCase {

    private function setPostData($data) {
        $_SERVER['REQUEST_METHOD'] = 'POST';
        $_SERVER['CONTENT_TYPE'] = 'application/json';
        $_SERVER['CONTENT_LENGTH'] = strlen($data);

        // corpo da requisição
        $GLOBALS['HTTP_RAW_POST_DATA'] = $data;
    }
    
    public function testCreateWithValidData() {
        $postData = json_encode(['name' => 'Produto Teste', 'type_id' => 1]);
        $this->setPostData($postData);
        
        $controller = new ProductController();
        
        ob_start();
        $controller->create();
        $output = ob_get_clean();
        
        $expectedOutput = json_encode(['success' => true]);
        $this->expectOutputString($expectedOutput);
    }
}
?>